export type Entry = {
  slug?: string;
  title: string;
  role: string;
  when: string;
  start: string; // year-month, used to order entries by recency
  where: string;
  summary: string;
  points: string[];
  stats: { value: string; label: string }[];
  tools: string[];
  pending?: boolean;
  status?: { label: string; live?: boolean }; // shown on AI Builds cards
  link?: { label: string; href: string };
  detail?: {
    company: string[];
    role: string[];
    work: { title: string; points: string[] }[];
  };
};

export const site = {
  name: 'Alex Watts',
  headline: 'Alex Watts',
  intro: 'Second-year Business Administration student at Northeastern University.',
  interests: ['Product management', 'Go-to-market', 'Consulting', 'Growth', 'Strategy', 'Digital transformation', 'Analytics', 'Technology'],
  facts: [
    ['Co-op', 'January – July 2027'],
    ['Languages', 'English, German (B2)'],
    ['Authorized to work', 'United States, EU'],
  ],
  experience: [
    {
      slug: 'spread-ai',
      title: 'SPREAD AI',
      role: 'Go-to-Market Resident',
      when: 'May – July 2026',
      start: '2026-05',
      where: 'Berlin',
      summary: 'Berlin-based enterprise software company that connects complex product and engineering data in a unified digital model.',
      points: [],
      stats: [
        { value: '1 month', label: 'CUBE 2026 campaign, planning, and logistics' },
        { value: '30+', label: 'LinkedIn posts promoting product and events' },
        { value: '400+', label: 'Slides in a database built for an automated sales-deck tool' },
      ],
      tools: ['Salesforce', 'HubSpot', 'Figma', 'Claude Code'],
      detail: {
        company: [
          'SPREAD is a Berlin-based enterprise software company with over 100 employees that connects complex product and engineering data in a unified digital model.',
          'Customers include BMW, Volkswagen, and Rheinmetall.',
        ],
        role: [
          'I supported field marketing, event campaigns, content creation, and sales enablement, and worked directly with the Field Marketing Manager, Strategy & Operations Lead, and SVP of Go-to-Market.',
          'I was originally hired to support the Field Marketing Manager, but my role was rapidly expanded to include general marketing, sales enablement, building GTM tools, and partnerships.',
        ],
        work: [
          {
            title: 'CUBE 2026',
            points: [
              'Executed a 30-day marketing campaign for CUBE 2026, SPREAD’s invite-only Engineering AI conference, covering pre-event, on-site, and post-event activities.',
              'Planned and executed event logistics for CUBE 2026.',
              'Tracked LinkedIn performance post by post and adjusted timing, format, and internal promotion based on what drove engagement.',
              'Wrote a 12-page executive briefing summarizing the takeaways from CUBE 2026.',
            ],
          },
          {
            title: 'Industrial AI Summit',
            points: [
              'Built a marketing campaign plan for the 2026 Industrial AI Summit (INAI).',
              'Coordinated INAI registration operations across SPREAD’s sales team and two partner startups.',
            ],
          },
          {
            title: 'Content',
            points: [
              'Wrote 30+ LinkedIn posts promoting product and events, including content for SPREAD’s co-CEOs and sales team.',
              'Created and edited pitch decks for company boards, built with sales, PMs, and engineers.',
            ],
          },
          {
            title: 'Sales enablement',
            points: [
              'Developed frameworks for the sales team, including event-driven pipeline generation.',
              'Created a process for turning event contacts into sales leads, where none existed.',
              'Built an AI-searchable database of over 400 existing PowerPoint slides to support automated sales presentation creation.',
            ],
          },
          {
            title: 'Data and tracking',
            points: [
              'Built and managed Excel and Salesforce databases to track sales activity and results.',
              'Tracked performance through dashboards.',
            ],
          },
        ],
      },
    },
    {
      slug: 'bmw-group',
      title: 'BMW Group',
      role: 'International Consulting Programs Intern',
      when: 'January – July 2027',
      start: '2027-01',
      where: 'Munich',
      summary:
        'I will be working with the Retail Consulting Content & Market Management teams, which develop consulting programs and manage global consulting projects for selected markets of the BMW Group and its dealers.',
      points: [],
      stats: [
        { value: '6 months', label: 'Full-time' },
        { value: '30+', label: 'Countries in consulting rollouts' },
        { value: 'Jan 2027', label: 'Start date' },
      ],
      tools: [],
      pending: true,
      detail: {
        company: [
          'The Retail Consulting Content & Market Management teams develop consulting programs and manage global consulting projects for selected markets of the BMW Group and its dealers.',
          'The teams focus on sales topics, digital marketing, and customer experience, as well as strategic topics such as electromobility and digitalization.',
        ],
        role: [
          'International Consulting Programs Intern in Sales Channel Development at BMW AG in Munich: six months, full-time, starting from 18 January 2027.',
          'I will be working with the Retail Consulting Content & Market Management teams.',
        ],
        work: [
          {
            title: 'Consulting programs',
            points: [
              'Support the content and market management team in developing consulting programs and setting up international consulting projects.',
              'Support the creation of presentations, communication materials, consulting guidelines, consulting tools, and best-practice content for global rollouts.',
            ],
          },
          {
            title: 'Global rollouts',
            points: ['Support the management of rollouts of consulting projects carried out in more than 30 countries.'],
          },
          {
            title: 'AI',
            points: [
              'Support the integration of AI topics into global consulting content.',
              'Contribute to the development and rollout of AI solutions for the market community.',
            ],
          },
        ],
      },
    },
  ] as Entry[],
  projects: [
    {
      slug: 'co-op-finder',
      title: 'Co-op Finder',
      role: 'AI agent built with Claude Code',
      status: { label: 'Active', live: true },
      when: 'Since September 2026',
      start: '2026-09-07',
      where: '',
      summary: 'An agent that runs a daily search of job postings at relevant companies and adds them to Notion, ready to check for relevance and apply.',
      points: [],
      stats: [
        { value: '269', label: 'Postings logged' },
        { value: '144', label: 'Companies' },
        { value: '1', label: 'Co-op landed' },
      ],
      tools: [],
      link: { label: 'Read the full story', href: '/blog/over-polishing' },
      detail: {
        company: [
          'Second-year students at Northeastern University spend a semester looking for a 6-month co-op.',
          'There are a huge number of opportunities that are functionally the same as a co-op but are named something else and are posted directly by companies rather than through the Northeastern co-op system.',
        ],
        role: [
          'An agent built with Claude Code runs a daily search of job postings at relevant companies and adds them to a Notion file, ready to check for relevance and apply.',
          'Each job’s fit is graded in an open feedback column. The agent learns from that feedback and proposes changes to its own rules, approved with a click.',
        ],
        work: [
          {
            title: 'The mistake',
            points: [
              'Early versions were returning results in obscure cities, from companies with nothing to do with tech, and for roles I was unqualified for.',
              'My solution was to iterate and tighten my search criteria until I ended up with a huge document of restrictions for my agent to follow.',
              'By the time I had hit double-digit iterations, my agent only returned 4 job postings. Unlike a human, my agent did not know when to break the rules I had set for it.',
            ],
          },
          {
            title: 'The fix',
            points: [
              'I realized I had been pre-deciding my results by setting so many filters, and that I needed to move in the other direction and widen my search.',
              'Location, language, and work authorization stayed as hard filters. Everything else was loosened.',
              'I replaced those restrictions with an open column for written feedback where I could “grade” the fit of each job found by my agent.',
            ],
          },
          {
            title: 'The result',
            points: ['269 postings from 144 companies, and 1 co-op landed.'],
          },
          {
            title: 'The lesson',
            points: [
              'The lesson wasn’t that I needed a more polished agent. It was that I needed to give myself something imperfect to work with.',
              'By trying to eliminate every bad result in advance, I had also eliminated opportunities to learn from unexpected ones.',
            ],
          },
        ],
      },
    },
    {
      slug: 'switchboard',
      title: 'Switchboard',
      role: 'Planning app',
      status: { label: 'Currently in use with more development planned', live: true },
      when: 'Since September 2026',
      start: '2026-09-22',
      where: '',
      summary: 'Pulls deadlines from syllabi into one ranked to-do list, and books work sessions straight onto Google Calendar.',
      points: [],
      stats: [
        { value: '90', label: 'Deadlines and tasks tracked' },
        { value: '4', label: 'Courses imported from syllabi' },
        { value: '24', label: 'Versions shipped' },
      ],
      tools: [],
      link: { label: 'Read the full story', href: '/blog/working-backwards' },
      detail: {
        company: [
          'The app started from conversations I had with other students at Northeastern. We all use a lot of tools to organize our work: Google Calendar, Canvas, Granola, AI tools, and paper and digital to-do lists.',
          'All of these have useful features but they also have features that don’t work well for us as university students, and most importantly, the tools are all disconnected from each other.',
        ],
        role: [
          'Claude pulls every deadline out of an uploaded syllabus, ready to review and approve.',
          'Open tasks are ranked by how soon they’re due, how urgent they are, and how much they’re worth.',
          'Tapping a task, then a free slot, books a work session straight onto Google Calendar with a reminder. Anything else can be typed or dictated into one box, and Claude turns it into a task.',
        ],
        work: [
          {
            title: 'The mistake',
            points: [
              'The AI started guessing due dates. A “due before class” deadline was being treated as due at 11:59 PM, which would have made work late.',
              'Now it reads the real class time from the calendar, won’t approve anything without a due time, and asks instead of guessing.',
            ],
          },
          {
            title: 'The result',
            points: [
              '90 deadlines and tasks across 4 courses, 83 of them imported straight from syllabi.',
              'Even before I had rolled my organizational app out to other people for testing, other students were actively asking to use it.',
            ],
          },
          {
            title: 'The lesson',
            points: [
              'Having an interesting idea is not enough to make people invested in a product or willing to use it.',
              'You need to identify the customer and the problem from the start and work backwards from there.',
              'Check early, and don’t let AI guess when it matters.',
            ],
          },
        ],
      },
    },
  ] as Entry[],
  work: {
    heading: 'How I like to work',
    principles: [
      {
        text: 'Identify the customer and the problem first, then work backwards.',
        why: 'Having an interesting idea is not enough to make people invested in a product or willing to use it.',
      },
      {
        text: 'Get something imperfect running, then improve it.',
        why: 'Make something concrete quickly, so there is something to react to.',
      },
      {
        text: 'Learning quickly comes from staying curious and asking questions.',
        why: 'Be willing to try new tools and methods.',
      },
      {
        text: 'A good attitude and a willingness to say yes go a long way.',
        why: 'Contribute wherever needed to support the team and the broader business.',
      },
    ],
  },
  volunteering: [{ where: 'Berlin', org: 'Rückenwind', role: 'Volunteer' }],
  education: [
    {
      when: 'September 2025 – May 2029',
      school: 'Northeastern University',
      detail: 'BS in Business Administration. First year in London, now in Boston.',
    },
    {
      when: 'August 2020 – June 2025',
      school: 'Berlin International School',
      detail: 'IB Diploma. Kant Prize Medal 2025.',
    },
  ],
  story: [
    { city: 'Chicago', at: 0, text: 'Born in Chicago, Illinois, where I lived for 10 months.' },
    {
      city: 'Seattle',
      at: 1,
      text: 'I spent my childhood in Seattle, home to Amazon and Microsoft. This is where my interest in business and tech started.',
    },
    {
      city: 'Berlin',
      at: 2,
      travel: true,
      text: 'Moved to Berlin with my family in August 2020, in the middle of the pandemic.',
    },
    {
      city: 'Berlin',
      at: 2,
      text: 'Completed the IGCSE and IB programs at Berlin International School, alongside students from 70+ nationalities.',
    },
    {
      city: 'Berlin',
      at: 2,
      text: 'I wanted to return to the US, study business, and learn by doing.',
    },
    {
      city: 'Northeastern',
      at: 2,
      text: 'That led me to Northeastern University in Boston, known for its co-op program: six months working full-time at a company, built into the degree.',
    },
    {
      city: 'London',
      at: 3,
      travel: true,
      text: 'Spent my first year at Northeastern’s London campus alongside 1,000 Northeastern students accepted to the London Scholars Program.',
    },
    {
      city: 'Berlin',
      at: 4,
      text: 'Summer internship on SPREAD AI’s GTM team. Hired to support field marketing, my role grew to include marketing, sales enablement, GTM tools, and partnerships.',
    },
    {
      city: 'Boston',
      at: 5,
      text: 'Now in my 2nd of 4 years at Northeastern in Boston, I am searching for a six-month co-op from January – July 2027.',
    },
  ] as { city: string; at: number; text: string; travel?: boolean }[],
  nav: [
    { label: 'Experience', href: '/experience' },
    { label: 'AI Builds', href: '/builds' },
    { label: 'Blog', href: '/blog' },
  ],
  next: {
    home: { label: 'Explore my experience', href: '/experience' },
    experience: { label: 'Explore my AI builds', href: '/builds' },
    builds: { label: 'Read my blog', href: '/blog' },
    blog: { label: 'Get in touch', href: '/contact' },
  },
  contact: {
    heading: 'Get in touch',
    intro: 'I would welcome the chance to talk.',
  },
  links: [
    { label: 'Email', href: 'mailto:alex@alexwatts.de', newTab: false },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-watts-557907268', newTab: true },
    { label: 'GitHub', href: 'https://github.com/alexjwatts', newTab: true },
    { label: 'Substack', href: '', newTab: true },
  ],
};
