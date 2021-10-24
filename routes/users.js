// Load express library
import { Router } from 'express';
const router = Router();
// Load users controller
import { create, authenticate } from '../app/api/controllers/users';
// Define routes for post methods
router.post('/register', create);
router.post('/authenticate', authenticate);
export default router;