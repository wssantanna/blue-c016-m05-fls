import { PrismaClient } from '@prisma/client';

const DbContext = new PrismaClient();

async function main() {

    const addNewUser = await DbContext.user.create({
        data: {
            email: 'wssantanna@gmail.com'
        }
    });

    const addAnotherNewUser = await DbContext.user.create({
        data: {
            name: 'Camila',
            email: 'camila@gmail.com'
        }
    });


    const getAllUsers = await DbContext.user.findMany();

    const updateFirstUser = await DbContext.user.update({
        where: { id: 1 },
        data: {
            name: 'Willian'
        }
    });

    const findUserByEmail = await DbContext.user.findUnique({
        where: {
            email: 'wssantanna@gmail.com'
        }
    });

    const findUsersWithoutNameRegistered = await DbContext.user.findMany({
        where: {
            name: null
        }
    })

    console.log('create()', addNewUser, addAnotherNewUser);
    console.log('findMany()', getAllUsers);
    console.log('findUnique()', findUserByEmail);
    console.log('findMany()', findUsersWithoutNameRegistered)
    console.log('update()', updateFirstUser);
}

main()
    .then(async () => {
        await DbContext.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await DbContext.$disconnect();
        process.exit(1)
    })