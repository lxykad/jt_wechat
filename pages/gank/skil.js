// pages/gank/skil.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: [],
        page: 1,
        isLoading: false,
        hasMore: true
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
  * 页面相关事件处理函数--监听用户下拉动作
  */
    onPullDownRefresh: function () {
        console.log('下拉刷新')

        this.loadData()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

        console.log('分页')
        this.loadMore()
    },

    /**
     * loadData from server
     */
    loadData: function () {
        var that = this

        this.setData({
            isLoading: false,
            page: 1
        })
        console.log(that.data.page)

        wx.request({
            url: 'https://gank.io/api/data/Android/10/' + that.data.page,
            success: function (res) {

                that.setData({
                    array: res.data.results
                })
                wx.stopPullDownRefresh()
            }
        })
    },

    /**
     *  分页 加载更多
     */
    loadMore: function () {
        if (this.data.array.lenght === 0 || this.data.isLoading) {
            return;
        }

        console.log(this.data.isLoading)

        var that = this
        this.setData({
            isLoading: true,
            page: that.data.page + 1
        })

        console.log(that.data.page)
        wx.request({
            url: 'https://gank.io/api/data/Android/10/' + that.data.page,
            success: function (res) {
                that.setData({
                    array: that.data.array.concat(res.data.results),
                    isLoading: false,
                })
                if (res.data.results.lenght === 0) {
                    that.setData({
                        hasMore: false
                    })
                }
            }
        })
    }
})