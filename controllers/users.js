import db from '../db/client.js';
import asyncHandler from '../middlewares/asyncHandler.js';

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const { rowCount, rows } = await db.query('SELECT * FROM users OssssRDER BY id ASC;');
  res.json({ total: rowCount, users: rows });
});

export const createNewUser = asyncHandler(async (req, res) => res.send('POST'));

export const getSingleUser = asyncHandler(async (req, res) => res.send('GET single'));

export const updateUser = asyncHandler(async (req, res) => res.send('PUT'));

export const deleteUser = asyncHandler(async (req, res) => res.send('DELETE'));
