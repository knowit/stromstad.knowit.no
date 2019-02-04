const viewmodel = {
  title: 'Fagseminar høst 2018',
  event: {
    date: '19. oktober - 22. oktober 2018',
    longDate: '19. oktober - 22. oktober 2018',
    venue: 'Austria Trend Hotel, Dunajska cesta 154, 1000 Ljubljana',
    city: 'Ljubljana',
    country: 'Slovenia',
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.464257241591!2d14.51138181585606!3d46.08172270004596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532e8018ac3f7%3A0xfdd77079c72ef36c!2sAustria+Trend+Hotel+Ljubljana!5e0!3m2!1sen!2sno!4v1537198204127',
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
          villages: [
            '1'
          ]
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
      villages: [
        '1'
      ]
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
  villages: [{ id: '1', name: 'Test village', markdown: '## test' }],
};

export default viewmodel;
