//object literals

let user = {  
    name:'natalie',
    age:35,
    profession:'actress',
    location: 'united states of america',
    movies: ['Thor','No Strings attached','black swan']
};

console.log(user);
console.log(user.name);

user.name = 'port man';
console.log(user.name); //change of name

//another way to get details


user['name'] = 'emily';
console.log(user['name']);
