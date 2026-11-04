import { pushScroll } from './push-scroll';

// Where an element sits in the page layout, ignoring transforms.
export const pageTop = (element: HTMLElement) => {
  let top = 0;
  for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) top += node.offsetTop;
  return top;
};

// A simple page is one section: its content down to the next-page button(s). The footer then takes its own push.
export function pushToFooter() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const end = document.querySelector<HTMLElement>('.page-next');
  if (!end) return;
  const main = document.querySelector<HTMLElement>('main')!;
  main.classList.add('pushable');
  pushScroll({
    sections: () => [{ top: 0, bottom: pageTop(end) + end.offsetHeight - parseFloat(getComputedStyle(end).paddingBottom) + 32 }],
    pullTargets: [main],
  });
}
