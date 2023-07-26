import { useState } from "react";

/**
 * validity 체크하는 hook
 * @param {"email" || "password"} type
 * @returns
 */
const useValidate = (type) => {
  const [validity, setValidity] = useState(false);
  const [warnList, setWarnList] = useState([]);

  const oncheckValidity = (text) => {
    const warnList = [];
    if (!text) {
      return setValidity(false);
    }
    const regexforValAuth = {
      email: {
        warnText: `'@'가 포함된 올바른 이메일을 입력해주세요.`,
        fn: new RegExp("@"),
      },
      password: {
        warnText:`8글자 이상의 비밀번호를 입력해주세요.`,
        fn: new RegExp("(?=.{8,})"),
      },
    };
    const { warnText, fn } = regexforValAuth[type];
    if (!fn.test(text)) {
      warnList.push(warnText);
    }

    setWarnList(warnList);
    if (warnList.length > 0) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };
  return [validity, warnList, oncheckValidity];
};

export default useValidate;
