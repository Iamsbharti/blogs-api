let generateResponse = (isError, status, errorMessage, successMessage) => {
  let res = {
    isError: isError,
    status: status,
    errorMessage: errorMessage,
    successMessage: successMessage,
  };

  return res;
}; // end generate response.

module.exports = { generateResponse: generateResponse };
