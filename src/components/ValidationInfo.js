export default function validateInfo(values) {
    let errors = {};
  
    // if (!values.username.trim()) {
    //   errors.username = 'Username required';
    // }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    // if (!values.email) {
    //   errors.email = 'Email required';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }
    // if (!values.name) {
    //     errors.name = 'Name required';
    //   } else if (!/^[A-Za-z]+/.test(values.name)) {
    //     errors.name = 'Name is invalid';
    //   }
    //   if (!values.address) {
    //     errors.address = 'Address required';
    //   } else if (values.address.length < 8) {
    //     errors.address = 'Address is invalid';
    //   }
    //   if (!values.salory) {
    //     errors.salory = 'Salory required';
    //   } else if (values.address.length < 5) {
    //     errors.salory = 'Salory is invalid';
    //   }

    // if (!values.password) {
    //   errors.password = 'Password is required';
    // } else if (values.password.length < 6) {
    //   errors.password = 'Password needs to be 6 characters or more';
    // }
  
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }