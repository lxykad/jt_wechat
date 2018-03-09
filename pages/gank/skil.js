// pages/gank/skil.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: [],
        page: 1,
        isLoading: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.loadData()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
    onPullDownRefresh: function () {
        console.log('下拉刷新')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        var that = this
        console.log('分页')

    },

    /**
     * loadData from server
     */
    loadData: function () {
        var that = this

        wx.request({
            url: 'https://gank.io/api/data/Android/10/1',
            success: function (res) {
                // console.log(res.data.results)
                that.setData({
                    array: res.data.results,
                    page: that.page + 1
                })
                console.log(that.page)
            }
        })
    }
})