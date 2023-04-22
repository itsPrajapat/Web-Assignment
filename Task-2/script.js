function checkPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[0-9]/.test(password)) {
      return false;
    }
  
    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    // Check if the password contains at least one special character
    if (!/[@$!%*?&]/.test(password)) {
      return false;
    }
  
    // If all checks pass, return true
    return true;
  }
  
  exports.handler = async (event) => {
    const body = event.body;
    if (!body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "FAILED" }),
      };
    }
    const { userName, password } = JSON.parse(body);
    if (!userName || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "FAILED" }),
      };
    }
    const usernameRegex = /^[a-zA-Z0-9]{1,8}$/;
    const passwordRegex =
      /^(?=.[A-Za-z0-9])(?=.[!@#$%^&])[A-Za-z0-9!@#$%^&]{1,8}$/;
  
    if (usernameRegex.test(userName) && checkPassword(password)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "SUCCESS" }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "FAILED" }),
      };
    }
  };