const router = require('express-promise-router')();

const RoomController = require('../controllers/Room');
const AccountController = require('../controllers/Account');

router.route('/room')
  .get(RoomController.index)
  .post(RoomController.create);

router.route('/account')
  .get(AccountController.index)
  .post(AccountController.create);

module.exports = router;
