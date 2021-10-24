// Load express library
import { Router } from 'express';
const router = Router();
// Load users controller
import { create } from '../app/api/controllers/ranks';
// Define routes for post methods
router.post('/register', create);
export default router;