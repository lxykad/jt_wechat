
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 3000
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getBanner()
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

})

