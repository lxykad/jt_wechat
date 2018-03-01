Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: '/pages/img/iv_merits.png',
        avatar_url:''
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
     * 
     * wx.chooseImage({
          sourceType: ['camera'],//album
          success: function(res) {
  
          },
      })
     */
    onAvatarClick() {
        var that = this
        wx.showActionSheet({
            itemList: [
                '打开相机', '打开相册'
            ],
            success: function (index) {

                if (index.tapIndex === 0) {
                    wx.chooseImage({
                        sourceType: ['camera'],
                        success: function (res) {
                            that.uploadImg(res.tempFilePaths[0])
                        },
                    })
                } else if (index.tapIndex === 1) {
                    wx.chooseImage({
                        sourceType: ['album'],//
                        success: function (res) {
                            that.uploadImg(res.tempFilePaths[0])
                        },
                    })
                }
            }
        })

    },
    uploadImg(url) {
        console.log(url)
        this.setData({
            avatar_url:url
        })
    }
})