// 此处用来存放所有登录相关的请求
import request from '@/utils/request'

// 1.图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 2.短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: { captchaCode, captchaKey, mobile }
  })
}

// 验证码登录
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}
