const { Router } = require('express');
const controller = require('../controllers/productos_controllers');

const router = Router();

router.get('/', controller.get);
/*router.get("/:id", controller.getById);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);*/

module.exports = router;