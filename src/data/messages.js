const messages = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Check for any updates pertaining to my location',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Smart Human',
    },
    location: {
      latitude: 48.864601,
      longitude: 2.398704
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hello Human, What can I do for you?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Abelian Bot',
    },
  },
];

module.exports = messages;