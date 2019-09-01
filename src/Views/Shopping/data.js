const SHOP_DATA = [
	{
		id: 1,
		title: "Hats",
		routeName: "hats",
		items: [
			{
				id: 1,
				name: "Black Brim",
				imageUrl: "https://images.unsplash.com/photo-1517502820012-ec45091f3ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
				price: 25
			},
			{
				id: 2,
				name: "Black Beanie",
				imageUrl: "https://images.unsplash.com/photo-1482840927633-621e8149f04f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				price: 18
			},
			{
				id: 3,
				name: "Straw Hat",
				imageUrl: "https://images.unsplash.com/photo-1532262499329-9a77c088959a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				price: 35
			},
			{
				id: 4,
				name: "Grey Brim",
				imageUrl: "https://images.unsplash.com/photo-1485675067348-b5ac01cfc282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
				price: 25
			},
			{
				id: 5,
				name: "Green Beanie",
				imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
				price: 18
			},
			{
				id: 6,
				name: "Palm Tree Cap",
				imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
				price: 14
			},
			{
				id: 7,
				name: "Red Beanie",
				imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
				price: 18
			},
			{
				id: 8,
				name: "Wolf Cap",
				imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
				price: 14
			},
			{
				id: 9,
				name: "Blue Snapback",
				imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
				price: 16
			}
		]
	},
	{
		id: 2,
		title: "Sneakers",
		routeName: "sneakers",
		items: [
			{
				id: 10,
				name: "Jordan",
				imageUrl: "https://images.unsplash.com/photo-1489647767089-3944a3baa54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				price: 220
			},
			{
				id: 11,
				name: "Adidas Yeezy",
				imageUrl: "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80",
				price: 280
			},
			{
				id: 12,
				name: "Black Converse",
				imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
				price: 110
			},
			{
				id: 13,
				name: "Nike Dunks",
				imageUrl: "https://images.unsplash.com/photo-1554203713-aa56c626d2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
				price: 160
			},
			{
				id: 14,
				name: "Nike Red High Tops",
				imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
				price: 160
			},
			{
				id: 15,
				name: "Nike Brown High Tops",
				imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
				price: 160
			},
			{
				id: 16,
				name: "Air Jordan Limited",
				imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
				price: 190
			},
			{
				id: 17,
				name: "Timberlands",
				imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
				price: 200
			}
		]
	},
	{
		id: 3,
		title: "Jackets",
		routeName: "jackets",
		items: [
			{
				id: 18,
				name: "Black Jean Shearling",
				imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
				price: 125
			},
			{
				id: 19,
				name: "Brown Leather Jacket",
				imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
				price: 90
			},
			{
				id: 20,
				name: "Grey Jean Jacket",
				imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
				price: 90
			},
			{
				id: 21,
				name: "Brown Shearling",
				imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
				price: 165
			},
			{
				id: 22,
				name: "Tan Trench",
				imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
				price: 185
			}
		]
	},
	{
		id: 4,
		title: "Womens",
		routeName: "womens",
		items: [
			{
				id: 23,
				name: "Blue Tanktop",
				imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
				price: 25
			},
			{
				id: 24,
				name: "Floral Blouse",
				imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
				price: 20
			},
			{
				id: 25,
				name: "Floral Dress",
				imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
				price: 80
			},
			{
				id: 26,
				name: "Red Dots Dress",
				imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
				price: 80
			},
			{
				id: 27,
				name: "Striped Sweater",
				imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
				price: 45
			},
			{
				id: 28,
				name: "Yellow Track Suit",
				imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
				price: 135
			},
			{
				id: 29,
				name: "White Blouse",
				imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
				price: 20
			}
		]
	},
	{
		id: 5,
		title: "Mens",
		routeName: "mens",
		items: [
			{
				id: 30,
				name: "Camo Down Vest",
				imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
				price: 325
			},
			{
				id: 31,
				name: "Floral Longsleeve",
				imageUrl: "https://images.unsplash.com/photo-1550773452-3356b8f185c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				price: 20
			},
			{
				id: 32,
				name: "Black Longsleeve",
				imageUrl: "https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
				price: 25
			},
			{
				id: 33,
				name: "Pink T-shirt",
				imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
				price: 25
			},
			{
				id: 34,
				name: "Jean Long Sleeve",
				imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
				price: 40
			},
			{
				id: 35,
				name: "Burgundy T-shirt",
				imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
				price: 25
			}
		]
	}
];

export default SHOP_DATA;
