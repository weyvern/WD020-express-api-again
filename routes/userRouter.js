import { Router } from 'express';
import { createNewUser, deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/users.js';

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createNewUser);

userRouter.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

export default userRouter;
