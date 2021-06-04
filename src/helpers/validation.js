function email(value) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}


const validationRules = {
  email: function (value) {
    const mail = email(value);
    return mail ? "" : "Niepoprawny email"
  },

  required: function (value) {
    return value ? "" : "Pole wymagane!";
  },

  name: function (value) {
    return value.length > 2 ? "" : "Minimum 3 znaki";
  }
}

export default function validation(value, rules) {

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const errorMessage = validationRules[rule](value);
    if (errorMessage) {
      return errorMessage;
    }
  }

  return '';
  // switch (type) {
  //   case 'email':
  //     const checkMail = email(value);
  //     return checkMail ? "" : "Niepoprawny adres email";
  //   case 'name':
  //     return value.length > 2 ? "" : "Minimum 3 litery"
  //   default:
  //     break;

  // }

}