const validateValue = (value) => {
  if (value < 0 || value > 100) {
    return false;
  } else {
    return true;
  }
};

export default validateValue;
