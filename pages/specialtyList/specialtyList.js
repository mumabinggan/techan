// pages/specialtyList/specialtyList.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		carousel:[
			{
				id: 10000,							//配置 id
				type:1,								//配置 type
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",	//图片 url
			},
			{
				id: 10000,							//配置 id
				type: 1,								//配置 type
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",	//图片 url
			},
			{
				id: 10000,							//配置 id
				type: 1,								//配置 type
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",	//图片 url
			}
		],
		list:[
			{
				id:10000,							//商品 id
				imageUrl:"https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title:"测试title",				   //显示 title
				description: "描述",
				price:"测试价格",						//价格
				specification:"测试规格",				//规格
				freeShip: true,
			},
			{
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			}, 
			{
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			},
			{
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			},
			{
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "山西运城万荣核桃一箱5斤",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			}, {
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			}, {
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			}, {
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			}, {
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description:"描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip: true,
			}, {
				id: 10000,							//商品 id
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",						//图片 url
				title: "测试title",				   //显示 title
				description: "描述",
				price: "测试价格",						//价格
				specification: "测试规格",				//规格
				freeShip:true,
			}
		],
		carouselImageUrls: [

		],
		listImageUrls: [

		],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		//设置数据
		this.dealData()
	},

	dealData:function() {
		//deal carouselUrls
		var carouselUrls = [];
		for (var num = 0; num < this.data.carousel.length; ++num) {
			var item = this.data.list[num];
			//carouselUrls[num] = item.imageUrl;
			carouselUrls[num] = "https://img3.doubanio.com/mpic/s1001902.jpg";
		}
		this.setData({
			carouselImageUrls: carouselUrls,
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})