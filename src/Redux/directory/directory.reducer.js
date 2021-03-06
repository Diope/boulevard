const initialState = {
    sections: [
        {
            title: 'Hats',
            imgUrl: 'https://images.unsplash.com/photo-1526848707818-825332fe55f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            id: 1,
            linkURL: 'shop/hats'
        },
        {
            title: 'Jackets',
            imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkURL: 'shop/jackets'
        },
        {
            title: 'Sneakers',
            imgUrl: 'https://images.unsplash.com/photo-1520316587275-5e4f06f355e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
            id: 3,
            linkURL: 'shop/sneakers'
        },
        {
            title: 'Women',
            imgUrl: 'https://images.unsplash.com/photo-1500517484800-e4676bd66290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            id: 4,
            size: 'large',
            linkURL: 'shop/womens'
        },
        {
            title: 'Men',
            imgUrl: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            id: 5,
            size: 'large',
            linkURL: 'shop/mens'
        },
        
    ]
}

export const directoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    default:
        return state
    }
}
