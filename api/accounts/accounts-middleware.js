exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
 console.log('check payload')
  // Ndote: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check unique name')
  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check id')
  next()
}
