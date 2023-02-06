function checkValidationPhoneNumber({ phoneNumber }) {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log('ERROR: PHone Number length has something wrong!')
    return false
  }
  return true
}

function getToken({ length }) {
  if (length === undefined || length === null) {
    console.log('ERROR: Input length')
    return
  }
  if (length <= 0) {
    console.log('ERROR: Too short')
    return
  }
  if (length > 10) {
    console.log('ERROR: Too long')
    return
  }

  const generatedToken = String(Math.floor(Math.random() * (10 ** length))).padStart(length, '0')
  console.log('Token is generated successfully!! :::', generatedToken)
  return generatedToken
}

function sendTokenToSMS({ phoneNumber, token }) {
  console.log(`${phoneNumber} 번호로 인증번호 ${token}을 전송합니다!`)
}

function createTokenAndSendToPhone({ phoneNumber }) {
  // 1. 휴대폰 번호 자릿수 유효성 검사
  if (!checkValidationPhoneNumber({ phoneNumber })) {
    return
  }
  
  // 2. 휴대폰 토큰 6자리 만들기
  const token = getToken({ length: 6 })

  // 3. 휴대폰으로 토큰 전송
  sendTokenToSMS({ phoneNumber, token })
}

createTokenAndSendToPhone({ phoneNumber: '01012345678' })
