const config = {
	rtmp: {
		port: 80,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60
	},
	http: {
		port: 443,
		allow_origin: '*'
	},
	auth: {
		play: false,
		publish: true,
		secret: 'ELTE_is_super_awesome'
	}
};

module.exports = config;