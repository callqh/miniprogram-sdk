Page({
    data: {
        corpId: '',
        workNo: '',
        countryCode: '+86',
        phoneNumber: '',
        showDingCall: true,
    },

    bindWorkNo(e) {
        this.setData({
            workNo: e.detail.value
        })
    },

    bindCountryCode(e) {
        this.setData({
            countryCode: e.detail.value
        })
    },

    bindPhoneNumber(e) {
        this.setData({
            phoneNumber: e.detail.value,
        })
    },

    bindShowDingCall(e) {
        this.setData({
            showDingCall: e.detail.value
        })
    },

    bindCorpId(e) {
        this.setData({
            corpId: e.detail.value,
        })
    },

    onCallUsers() {
        dd.callUsers({
            users: [this.data.workNo], //用户列表，工号
            success: function (res) {
                dd.alert({
                    title: '成功',
                    content: JSON.stringify(res)
                })
            },
            fail: function (err) {
                dd.alert({
                    title: '失败',
                    content: JSON.stringify(err)
                })
            }
        })
    },

    onShowCallMenu() {
        dd.showCallMenu({
            phoneNumber: this.data.phoneNumber,
            code: this.data.countryCode,
            showDingCall: this.data.showDingCall,
            success: (r) => {
                dd.alert({ content: JSON.stringify(r) })
            },
            fail: (err) => {
                dd.alert({ title: "失败", content: JSON.stringify(err) })
            }
        })
    },

    onCheckBizCall() {
        console.log('corpId:', this.data.corpId)
        dd.checkBizCall({
            corpId: this.data.corpId,
            success: (r) => {
                dd.alert({ content: JSON.stringify(r) })
            },
            fail: (err) => {
                dd.alert({ content: JSON.stringify(err) })
            }
        })
    }

});
