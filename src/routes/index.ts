import { Router } from 'express';
import { controllers } from '../controllers';

const router = Router();

router.get('/', controllers.HomeController.home);
router.get('/example', controllers.getExample);

export default router;
