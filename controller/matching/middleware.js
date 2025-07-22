import prisma from '../../prisma/prisma.js';

export const requestUserMiddleware = async (req, res) => {
  const data = req.body;
  try {
    const user = await prisma.profile.findFirst({ where: { id: data.user1Id } });
    if (!user)
      return res.status(404).send({ message: `user not found with id ${id}` });

    const swipe = await prisma.match.create({ data: data });
    if (!swipe)
      return res.status(500).send({ err: 'unable to create a match' });
    return res.status(200).send({ data: swipe });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'error while creating matches' });
  }
};

export const getSwipedData = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: 'no id found' });
  try {
    const swipe = await prisma.match.findMany({ where: { user2Id: swiperid } });
    if (!swipe) return res.status(404).send({ message: 'match not found' });
    return res.status(400).send({ data: swipe });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'error while fetching matches' });
  }
};

export const acceptMatchingRequest = async (req, res) => {
  const { matchid } = req.params;
  if (!matchid) return res.staus(400).send({ message: 'no matchid provided' });
  try {
    const match = await prisma.match.update({
      where: { id: matchid },
      data: { status: true },
    });

    if (!match) return res.status(404).send({ message: 'match not found' });

    return res.status(200).send({ message: 'accepted match' });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'error while accepting' });
  }
};
