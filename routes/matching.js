import { Router } from 'express';
import {
  acceptMatchingRequest,
  getSwipedData,
  requestUserMiddleware,
} from '../controller/matching/middleware.js';

const MatchRouter = Router();

MatchRouter.post('/request-user', requestUserMiddleware);
MatchRouter.patch('/accept/:id', acceptMatchingRequest);

export default MatchRouter;
