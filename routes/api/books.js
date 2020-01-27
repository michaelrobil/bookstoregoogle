const router = require("express").Router();
const bC = require('../../controllers/bC');

router
    .route('/')
        .get(bC.searchBook)
        .post(bC.create);

router
    .route('/store')
        .get(bC.findBook);

router
    .route('/:id')
        .delete(bC.remove);


module.exports = router;