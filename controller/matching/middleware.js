import { prisma } from '../../prisma/prisma.js';

export const requestUserMiddleware = async (req, res, next) => {
  const data = req.body;
  if (!id) return res.status(400).send({ message: 'id not found' });
  try {
    const user = await prisma.user.findFirst({ where: { id: id } });
    if (!user)
      return res.status(404).send({ message: `user not found with id ${id}` });

    const swipe = await prisma.swipe.create({ data: data });
  } catch (err) {
    console.log(err);
  }
};
