import storage from '@/xjs/storage'

export default {
	state: {
		queued: [],

		signin: {
			token: storage.get('token'),
			reconnect: null,
			user: null,
		},

		key: {
			lastPress: {
				name: null,
				code: null,
				modifier: null,
				released: false,
			},
			count: 0,
			pressed: {},
		},
	},
}
