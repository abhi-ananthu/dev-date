import prisma from '../../prisma.js';

export const createUser = async (req, res, next) => {
    try{
        const { 
            githubUsername,
            age,
            gender,
            interests,
            location,
            profession
        } = req.body;
        const newUser = await prisma.user.create({
            data:{
                githubUsername,
                age,
                gender,
                interests,
                location,
                profession
            }
        });
        res.status(201).send(newUser);
    }catch(err){
        if(err.code === 'P2002'){
            res.status(400).send('User with this email or GitHub username already exists');
        }else{
            res.status(500).send('Error creating user');
        }
    }
};

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
