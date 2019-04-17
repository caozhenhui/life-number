function ajax (url, data, header, method) {
	let p = new Promise( (res, rej) => {
		uni.request({
			url,
			data: data ? data : null,
			method: method ? method : 'GET',
			header: header ? header : null,
			success: (data) => {
				if (data.statusCode === 200 || data.statusCode === 304) {
					res(data)
				} else {
					console.log('请求错误')
				}
			},
			fail: (data) => {
				rej(data)
			}
		});
	})
	return p;
}

export default {
	get: (url, data, header) => {
		return ajax(url,data,header)
	},
	post: (url, data, header) => {
		return ajax(url, data, header, 'POST')
	}
}