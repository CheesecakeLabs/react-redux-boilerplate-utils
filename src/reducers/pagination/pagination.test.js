import pagination from '.'

const payload = {
  count: 2,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      creator: {
        avatar:
          'https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg',
        username: 'Phsetti',
        twitch_followers: '0',
        youtube_followers: null,
        mixer_followers: null,
        twitter_followers: null,
        creator_search_link: 'http://search.woovit.com/streamers/phsetti',
      },
      platforms: ['steam'],
      created_at: '2018-01-17T12:24:55.124546Z',
      updated_at: '2018-01-17T12:24:55.124598Z',
      status: 'pending',
      creator_acknowledge: false,
      campaign: {
        title: 'Dota 2',
        id: 3,
        slug: 'dota-2-1',
      },
    },
    {
      id: 2,
      creator: {
        avatar:
          'https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg',
        username: 'Phsetti',
        twitch_followers: '0',
        youtube_followers: null,
        mixer_followers: null,
        twitter_followers: null,
        creator_search_link: 'http://search.woovit.com/streamers/phsetti',
      },
      platforms: ['steam'],
      created_at: '2018-01-17T12:24:55.124546Z',
      updated_at: '2018-01-17T12:24:55.124598Z',
      status: 'pending',
      creator_acknowledge: false,
      campaign: {
        title: 'Dota 2',
        id: 3,
        slug: 'dota-2-1',
      },
    },
  ],
}

test('pagination reducer', () => {
  const newState = pagination(undefined, {
    type: 'SOME_TYPE_FULFILLED',
    payload,
    meta: {
      page: {},
    },
  })
  expect(newState.toJS()).toEqual({
    SOME_TYPE: { '-15128758': { count: 2, next: undefined, prev: null, results: ['1', '2'] } },
  })
})
