// Enum : Enums in Typescript are commonly used when you want to represent a set of related values and choose one value from multiple options .
// Enums provide a convenient way to define a set of named values and associate then with specific meanings .

enum Role {
    user = "user" , 
    admin = "admin"
}

type LoginDetails = {
    name?: string ;
    email: string ;
    password: string ;
    role : [user , admin]
}

const user1:LoginDetails = {
    email: 'rishabhsinh@gmail.com',
    password : 'ueueuu',
    role : Role.user


} 

const user2:LoginDetails = {
    email: 'rishabhsindjfdh@gmail.com',
    password : 'ueueudddu',
    role : Role.admin


} 

const isAdmin: (user1: LoginDetails) => string (user1: LoginDetails) : string => {
    const {name, email,role} = user1;
    return role === "admin" ? ` ${name} is allow to enter ` : `${email} is not allowed`
}