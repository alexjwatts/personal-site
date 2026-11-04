// Push-to-advance scrolling between sections, like the Experience page, at any window size.
// Inside a section you scroll normally until its content ends. Going further takes a deliberate push: scrolling
// builds up "pull" (shown through --pull on the section's element), and once it passes a threshold the page glides
// to the next section, then waits a moment before accepting another push. A pause lets the pull relax back.
// The footer is always the last section, so it only shows after its own push.
export type Section = {
  top: number; // scroll position where the section starts
  bottom: number; // page position where its content ends (including the next-page button, if any)
};

export function pushScroll(options: { sections: () => Section[]; pullTargets?: HTMLElement[] }) {
  const threshold = 650;
  const maxScroll = () => document.documentElement.scrollHeight - innerHeight;
  // Each section as [start, end] scroll positions; the footer is added as the last one.
  const ranges = () => {
    const max = maxScroll();
    const list = options.sections().map(({ top, bottom }) => {
      const start = Math.min(Math.max(0, top), max);
      return [start, Math.min(max, Math.max(start, bottom - innerHeight))] as const;
    });
    list.push([max, max]);
    return list;
  };
  const current = (all: ReturnType<typeof ranges>) => {
    let index = 0;
    all.forEach(([start], i) => { if (start <= scrollY + 2) index = i; });
    return index;
  };

  let pull = 0;
  let busy = false;
  let relax = 0;
  const showPull = () => {
    const targets = options.pullTargets ?? [];
    targets.forEach((target) => target.style.setProperty('--pull', '0'));
    targets[current(ranges())]?.style.setProperty('--pull', (pull / threshold).toFixed(3));
  };
  // Glide to the next section's start, or back to the end of the previous one.
  const go = (direction: number) => {
    const all = ranges();
    const index = current(all);
    const target = Math.max(0, Math.min(all.length - 1, index + direction));
    pull = 0;
    showPull();
    const top = direction > 0 ? all[target][0] : all[target][1];
    if (target === index || Math.abs(top - scrollY) < 1) return;
    busy = true;
    scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => { busy = false; }, 900);
  };
  const pushPast = (amount: number) => {
    if (Math.sign(amount) !== Math.sign(pull)) pull = 0; // switching direction starts the pull over
    pull += amount;
    showPull();
    clearTimeout(relax);
    relax = window.setTimeout(() => { pull = 0; showPull(); }, 260);
    if (Math.abs(pull) >= threshold) go(Math.sign(pull));
  };
  // Scroll within the current section if it has more content that way; otherwise build up pull.
  // Reaching a section's edge while scrolling locks it until that gesture ends (a short gap between events), so a
  // trackpad's momentum can't carry on into the next section: moving on always takes a fresh, deliberate push.
  let edgeLock = false;
  let lastEvent = 0;
  const move = (amount: number, pushAmount = amount) => {
    const now = performance.now();
    const gap = now - lastEvent;
    lastEvent = now;
    if (busy) return;
    const all = ranges();
    const [start, end] = all[current(all)];
    if (amount > 0 && scrollY < end - 1) {
      pull = 0;
      const top = Math.min(end, scrollY + amount);
      scrollTo({ top, behavior: 'instant' });
      edgeLock = top >= end - 1;
    } else if (amount < 0 && scrollY > start + 1) {
      pull = 0;
      const top = Math.max(start, scrollY + amount);
      scrollTo({ top, behavior: 'instant' });
      edgeLock = top <= start + 1;
    } else {
      if (edgeLock && gap < 180) return;
      edgeLock = false;
      pushPast(pushAmount);
    }
  };

  addEventListener('wheel', (event) => {
    if (event.ctrlKey) return;
    event.preventDefault();
    move(event.deltaMode === 1 ? event.deltaY * 40 : event.deltaY);
  }, { passive: false });

  let touchY: number | null = null;
  addEventListener('touchstart', (event) => { touchY = event.touches[0].clientY; }, { passive: true });
  addEventListener('touchmove', (event) => {
    if (touchY === null) return;
    event.preventDefault();
    const delta = touchY - event.touches[0].clientY;
    move(delta, delta * 3);
    touchY = event.touches[0].clientY;
  }, { passive: false });
  addEventListener('touchend', () => { touchY = null; });

  addEventListener('keydown', (event) => {
    const forward = ['ArrowDown', 'PageDown', ' '].includes(event.key);
    const back = ['ArrowUp', 'PageUp'].includes(event.key);
    if (!forward && !back) return;
    if ((event.target as HTMLElement).closest('input, textarea, button, [contenteditable]')) return;
    event.preventDefault();
    if (busy) return;
    const all = ranges();
    const [start, end] = all[current(all)];
    const step = event.key.startsWith('Arrow') ? 80 : innerHeight * 0.85;
    if (forward && scrollY < end - 1) scrollTo({ top: Math.min(end, scrollY + step), behavior: 'smooth' });
    else if (back && scrollY > start + 1) scrollTo({ top: Math.max(start, scrollY - step), behavior: 'smooth' });
    else go(forward ? 1 : -1);
  });
}
