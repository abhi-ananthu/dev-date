import prisma from '../../prisma.js';

export const createUser = async (req, res, next) => {};

export const viewUserDetails = async (req, res) => {
    try{
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        res.send(user ? user : 'User not found');
    }catch(err){
        console.error(err);
        res.status(500).send('Error retrieving user details');
    }
};

export const updateUserDetails = async (req, res, next) => {};

export const deleteUserDetails = async (req, res, next) => {};

export const blockUser = async (req, res, next) => {};

export const unblockUser = async (req, res, next) => {};
