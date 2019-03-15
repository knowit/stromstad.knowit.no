const villages = [
  {
    path: '/village/creativevillage.md',
    name: 'Creative Village',
    icon: 'creativecrew',
  },
  {
    path: '/village/likestromstad.md',
    name: 'Likestrømstad',
    icon: 'hardwareguild',
  },
  {
    path: '/village/artificial_village_plan.md',
    name: 'Artificial Village',
    icon: 'artificial',
  },
  {
    path: '/village/villagegaudi.md',
    name: 'Village Gaudi',
    icon: 'architecture',
  },
  {
    path: '/village/security.md',
    name: 'Security Village',
    icon: 'securitychapter',
  },
  {
    path: '/village/webvillage.md',
    name: 'Web Village',
    icon: 'webchapter',
  },
  {
    path: 'village/jubileumsvillage.md',
    name: 'JubileumsVillage',
    icon: 'jubilee',
  },
  {
    path: 'village/rustyvillage.md',
    name: 'The Rusty Village',
    icon: 'rustguild',
  },
  {
    path: 'village/peoplevillage.md',
    name: 'People Village',
    icon: 'person',
  },
  {
    path: 'village/kotlinkoolaid.md',
    name: 'Kotlin Koolaid',
    icon: 'jvmchapter',
  },
];

const viewmodel = {
  title: 'Fagseminar vår 2019',
  event: {
    date: '22. mars - 23. mars 2019',
    longDate: '22. mars - 23. mars 2018',
    venue: 'Strömstad Spa & Resort',
    adress: 'Kebalvägen 229, 452 40 Strömstad',
    city: 'Strømstad',
    country: 'Sverige',
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8232.859042323511!2d11.1589928!3d58.9445901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe723ee18fbd70d92!2sStr%C3%B6mstad+Spa+%26+Resort!5e0!3m2!1sno!2sno!4v1549401021242',
  },
  meta: {
    title: 'Knowit Objectnet Fagseminar 2019',
    description:
      'Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Våren 2019 vil den bli avholdt 22. mars - 23. mars 2010 i Strømstad, Sverige.',
    keywords: 'Fagseminar, Strømstad, Fag, Villages',
  },
  schedules: [
    {
      day: 'Fredag 22. Mars',
      collections: [
        {
          time: '11:30',
          title: 'Avreise med buss fra Lakkegata 53',
        },
        {
          time: '14:00-14:25',
          title: 'Felles',
          entries: [
            {
              room: 'Armaria',
              slots: ['internmeet'],
            },
          ],
        },
        {
          time: '14:25-14:50',
          title: 'Felles',
          entries: [
            {
              room: 'Armaria',
              slots: ['mobility'],
            },
          ],
        },
        {
          time: '14:50-15:00',
          title: 'Felles',
          entries: [
            {
              room: 'Armaria',
              slots: ['pitcher'],
            },
          ],
        },
        {
          time: '15:00-15:05',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '15:05-18:00',
          title:
            'Villages - flere landsbyer med konferanser du kan besøke. Her er valget ditt, følg med på programmet. Det er mulig å bytte village hver hele time!',
          villages,
        },
        {
          time: '20:00',
          title: 'Middag',
        },
      ],
    },
    {
      day: 'Lørdag 23. Mars',
      collections: [
        {
          time: '06:30-09:00',
          title: 'Frokost',
        },
        {
          time: '09:00-13:00',
          title:
            'Villages - flere landsbyer med konferanser du kan besøke. Her er valget ditt, følg med på programmet. Det er mulig å bytte village hver hele time!',
          villages,
        },
        {
          time: '13:00',
          title: 'Lunsj',
        },
        {
          time: '15:00',
          title: 'Buss tilbake til Lakkegata 53',
        },
      ],
    },
  ],
  talks: {
    internmeet: {
      pending: false,
      speakers: [
        {
          name: 'Christer Kjellesvig',
          bio: '',
          email: 'ckj@knowit.no',
          pic: 'ckj.jpg',
        },
      ],
      title: 'Internmøte',
      type: 'Talk',
      description: 'Mars 2019 internmøte.',
    },
    mobility: {
      pending: false,
      speakers: [
        {
          name: 'Erik Nylund',
          bio: '',
          email: 'etn@knowit.no',
          pic: 'etn.jpg',
        },
      ],
      title: 'Mobilitet og smarte byer!',
      type: 'Talk',
      description:
        'Erik forteller om et av våre satsningsområder: Mobilitet! Hva ligger i mobilitet? Hvorfor skal vi drive med det? Og hva er smarte byer?',
    },
    pitcher: {
      pending: false,
      speakers: [],
      title: 'Villagene presenteres',
      type: 'Talk',
      description:
        'Hver Village får et minutt hver til å reklamere for seg selv.',
    },
  },
  villages: [],
};

export default viewmodel;
