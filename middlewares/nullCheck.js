/**
 * {error: true, status: 403, userMessage: 'some query parameter missing',
    data: <Name of the parameter that is missing>}.

The query parameters that are compulsory are - name :String, age:Number

On Success, display the following response - 

{error: false, status: 200, userMessage: 'all query parameters entered',
    data: {name: <Name passed in query params>, age: <age passed in query params>}}.
 */
exports.checkQueryParameters = (req, res, next) => {
  //console.log("middle", req.query);
  let name = req.query.name;
  let age = req.query.age;
  let flagName = false;
  let flagAge = false;
  if (name === "" || name === null || name === undefined) {
    flagName = true;
  }
  if (age === "" || age === null || age === undefined) {
    flagAge = true;
  }
  if (flagName) {
    //console.log("name true send res", flagName);
    res.json(modifyRes(true, 403, "some query parameter missing", "name"));
  }
  if (flagAge) {
    console.log("age true send res", flagAge);
    res.json(modifyRes(true, 403, "some query parameter missing", "age"));
  }
  //console.log(flagAge, flagName);
  if (!flagAge && !flagName) {
    res.json(
      modifyRes(false, 200, "all query parameters entered", {
        name: name,
        age: age,
      })
    );
  }

  next();
}; //end check query params
function modifyRes(error, status, userMessage, data) {
  let res = {
    error: error,
    status: status,
    userMessage: userMessage,
    data: data,
  };
  return res;
}
