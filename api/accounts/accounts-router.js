const router = require('express').Router()

const middleWare = require('./accounts-middleware')

const Account = require('./accounts-model')
router.get('/', async (req, res, next) => {
  try{
    const accounts = await Account.getAll()
    res.json(accounts)
  }catch(err){
    next(err)
  }
})

router.get('/:id',middleWare.checkAccountId, (req, res, next) => {
res.json(req.account)

})

router.post('/', middleWare.checkAccountNameUnique,
 middleWare.checkAccountPayload,
  async (req, res, next) => {
  try{
     const newPost = await Account.create(req.body)
     res.status(201).json(newPost)
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

router.delete('/:id',middleWare.checkAccountId, async (req, res, next) => {
  try{
    const deleted = await Account.deleteById(req.params.id)
      res.json(deleted)
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
