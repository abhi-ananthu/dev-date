import prisma from '../../prisma/prisma.js';
import { ProfileSchema } from '../../utils/zod-schema.js';

export const createUser = async (req, res, next) => {
  try {
    const parseResponse = ProfileSchema.safeParse(req.body);
    if (parseResponse.error) return res.send({ error: parseResponse.error });
    const newUser = await prisma.profile.create({
      data: parseResponse.data,
    });
    res.status(201).send(newUser);
  } catch (err) {
    if (err.code === 'P2002') {
      res
        .status(400)
        .send('User with this email or GitHub username already exists');
    } else {
      console.log(err);
      res.status(500).send('Error creating user');
    }
  }
};

export const viewUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await prisma.profile.findUnique({
      where: { id: userId },
    });
    res.send(user ? user : 'User not found');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user details');
  }
};

export const updateUserDetails = async (req, res, next) => {};

export const deleteUserDetails = async (req, res, next) => {};

export const blockUser = async (req, res, next) => {};

export const unblockUser = async (req, res, next) => {};

export const getRequestedUserMiddleware = async (req, res) => {
  const { id } = req.params;
  try {
    const requests = await prisma.match.findMany({
      where: { user2Id: id, status: false },
    });
    if (!requests) return res.staus(404).send({ message: 'user not found' });
    return res.status(200).send({ data: requests });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'unable to fetch requests' });
  }
};
