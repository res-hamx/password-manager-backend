const prisma = require("./lib/prisma");

async function main(){
        // const user= await prisma.user.create({
        //         data:{
        //                 name:"Resham",
        //                 email:"resham@gmail.com",
        //                 password:"dummyPassword"
        //         }
        // });
        await prisma.user.update({
                where: {
                email: "resham@gmail.com"
                },
                data: {
                name: "Resham Bhattarai"
                }
        });
        
        const users= await prisma.user.findMany();

        console.log(users);
        
}

main()
        .catch(console.error)
        .finally(async () => {
                await prisma.$disconnect();
        });