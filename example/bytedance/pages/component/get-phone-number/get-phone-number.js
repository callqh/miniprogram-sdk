const login = () => {
  return new Promise((resolve, reject) => {
    tt.login({
      force: true,
      success: function (res) {
        console.log(`login调用成功${res.code} ${res.anonymousCode} ${res.isLogin}`);
        if (res.code) {
          tt.setStorageSync('login.code', res.code);
          resolve({
            hasLogin: true,
            code: res.code
          });
        } else {
          tt.showModal({
            title: '本地接口调用成功，但登录失败了'
          });
          reject({
            hasLogin: false
          });
        }
      },
      fail: function (err) {
        tt.showModal({
          title: '调用登录接口失败'
        });
        console.log(err.errMsg)
        reject({
          hasLogin: false
        });
      },
      complete: res => {
        console.log('触发登录');
      }
    });
  });
};

Component({
  data: {},
  lifetimes: {
    attached() {
      this.getSessionKey().then(sessionKey => {
        this.sessionKey = sessionKey;
      });
    }

  },
  properties: {},
  methods: {
    gotPhoneNumber(e) {
      console.log('sessionKey================', this.sessionKey);
      tt.request({
        url: 'https://ghrp2gxy.fn.bytedance.net',
        method: 'POST',
        data: {
          "encryptedData": e.detail.encryptedData,
          "iv": e.detail.iv,
          "session_key": this.sessionKey
        },
        success: res => {
          const userInfo = JSON.parse(res.data);
          tt.showModal({
            title: '用户当前的手机号为',
            content: userInfo.phoneNumber
          });
        }
      });
    },

    getSessionKey() {
      return login().then(({
        code
      }) => new Promise((resolve, reject) => {
        tt.request({
          url: 'https://developer.toutiao.com/api/apps/jscode2session',
          data: {
            appid: 'tt07e3715e98c9aac0',
            secret: '4e8d146047fb9d4264421f6d9532980e2cd348d0',
            code: code
          },
          success: res => {
            console.log('sessionKey:', res);
            resolve(res.data.session_key);
          }
        });
      }));
    },

    login() {
      tt.login({
        success: res => {
          if (res.code) {
            this.setData({
              hasLogin: true,
              code: res.code
            });
            tt.setStorageSync('login.code', res.code);
          }
        }
      });
    }

  }
});