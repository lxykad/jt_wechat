
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [],
        newsList: [],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 3000,
        baifo: '../img/icon_lifo_new.png',
        fashi: '../img/icon_event_new.png',
        fawu: '../img/icon_object_new.png'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getBanner(),
            this.getNews()
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

    },

    /**
   * 获取banner
   */
    getBanner: function () {
        var that = this
        wx.request({

            url: 'https://staging.baifotong.com/banners/banners?temple__name=稷途寺庙',
            method: 'GET',
            success: function (res) {
                if (typeof res.data.results.length === "undefined") {
                    console.log('found error')
                    return
                }
                const count = res.data.results.length

                var arr = [];
                var i;
                for (i = 0; i < count; i++) {
                    const url = res.data.results[i].image;

                    arr.push(url)

                }

                that.setData({ imgUrls: arr })
            }

        })
    },

    /**
     * 获取资讯列表
     */
    getNews: function () {
        var that = this
        wx.request({
            url: 'https://staging.baifotong.com/news/news',
            success: function (res) {

                const count = res.data.results.length

                var arr = [];
                var i;
                for (i = 0; i < count; i++) {

                    const news = res.data.results[i];
                    arr.push(news)
                }
                that.setData({ newsList: arr })

            }
        })
    },

    /**
     * 资讯列表点击事件
     */
    onItemClick: function (e) {
        const item = e.currentTarget.dataset.item
        var bean = JSON.stringify(item) // 参数用变量bean先保存起来 再进行传递的话，接收时会无法解析object参数
        wx.setStorage({
            key: 'news-item',
            data: bean,
        })    
            // json参数太大 也无法全部传递
            < wx.navigateTo({
            url: "/pages/news/news_detail",
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { },
            })
    },

    /**
     * 拜佛
     */
    onBaifoClick : function(){
        console.log("baifo====")

    },
    /**
    * 法事
    */
    onFashiClick: function () {
        console.log("fashi====")
        wx.navigateTo({
            url: '/pages/event/event',
        })

    },
    /**
    * 法务
    */
    onFawuClick: function () {
        console.log("faw====")

    }

})

