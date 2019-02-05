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
    title: 'Knowit Objectnet Fagseminar 2018',
    description:
      'Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Høsten 2018 vil den bli avholdt 19. oktober - 22. oktober 2018 i Ljubljana, Slovenia.',
    keywords: 'Fagseminar, Ljubljana, Fag',
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
          time: '14:00-14:45',
          title: 'Felles',
          entries: [
            {
              room: 'Armaria',
              slots: ['internmeet'],
            },
          ],
        },
        {
          time: '14:45-15:00',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '15:00-18:00',
          title: 'Villages',
        },
        {
          time: '20:00',
          title: 'Middag',
        },
      ],
      villages: ['1'],
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
          title: 'Villages',
          villages: ['1'],
        },
        {
          time: '13:00',
          title: 'Lunsj',
        },
        {
          time: '16:00',
          title: 'Buss tilbake til Lakkegata 53',
        },
      ],
      villages: ['1'],
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
      description:
        'Knowit Objectnet må hele tiden tilpasse seg markedet. Vi går fra å være teknologileverandør til partner med kundene våre. Hvilke nye ting driver vi med?',
    },
  },
  villages: [
    {
      id: '1',
      path: '/village/testmarkdown.md',
      name: 'Test village',
    },
    {
      id: '2',
      path: '/village/testmarkdown.md',
      name: 'En annen test village',
    },
  ],
};

export default viewmodel;
