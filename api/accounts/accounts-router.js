const router = require('express').Router()

const middleWare = require('./accounts-middleware')
router.get('/', (req, res, next) => {
  try{
    res.json('get accounts')
  }catch(err){
    next(err)
  }
})

router.get('/:id',middleWare.checkAccountId,
 (req, res, next) => {
  try{
     res.json('get account by id')
  } catch(err){
     next(err)
  }

})

router.post('/', middleWare.checkAccountNameUnique,
 middleWare.checkAccountPayload,
  (req, res, next) => {
  try{
     res.json('post new account')
  } catch(err){
    next(err)
  }
})

router.put('/:id', middleWare.checkAccountId,
middleWare.checkAccountNameUnique,
middleWare.checkAccountPayload,
 (req, res, next) => {
  try{
      res.json('change account')
  } catch(err){
      next(err)
  }
});

router.delete('/:id',middleWare.checkAccountId, (req, res, next) => {
  try{
      res.json('delete account')
  } catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
res.status(err.status || 500).json({
  message: err.message
})
})

module.exports = router;
