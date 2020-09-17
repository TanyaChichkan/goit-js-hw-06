// =========================================#1===========================================

// const getUserNames = users.map(function (user) {
//   return user.name;
// });
// console.log(getUserNames);

//Or

// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);

// const getUserNames = users => {
//   return users.map(user => user.name);
// };
// console.log(getUserNames(users));
// =========================================#2===========================================

// const getUsersWithEyeColor = users.filter(function (user) {
//   return user.eyeColor === 'blue';
// });

// console.table(getUsersWithEyeColor);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue'));

// =========================================#4===========================================

// const getInactiveUsers = users.filter(function (user) {
//   return !user.isActive;
// });

// console.table(getInactiveUsers);

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive);
// };
// console.log(getInactiveUsers(users));
// ==============================================#3========================

// const getUserNames = users.filter(function (user) {
//   return user.gender === 'male';
// });

// console.table(getUserNames);

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name);
// };

// console.log(getUsersWithGender(users, 'male'));

// =========================================#5===========================================

// const getUserWithEmail = users.find(function (user) {
//   //   return user.email === 'shereeanthony@kog.com';
//   return user.email === 'elmahead@omatom.com';
// });

// console.log(getUserWithEmail);

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// // ====================================#6==============================================

// const getUsersWithAge = users.filter(function (user) {
//   return user.age >= 20 && user.age <= 30;
// });

// const getUsersWithAge1 = users.filter(function (user) {
//   return user.age >= 30 && user.age <= 40;
// });

// console.table(getUsersWithAge);
// console.table(getUsersWithAge1);

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age >= min && user.age <= max);
// };
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// =====================================#7==============================================

// const calculateTotalBalance = users.reduce(function (acc, user) {
//   return acc + user.balance;
// }, 0);

// console.log(calculateTotalBalance);

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };
// console.log(calculateTotalBalance(users));
// =====================================#8==============================================

// const getUsersWithFriend = users.filter(function (user) {
//   if (user.friends.includes('Briana Decker')) {
//     return user.name;
//   }
// });

// const getUsersWithFriend1 = users.filter(function (user) {
//   if (user.friends.includes('Goldie Gentry')) {
//     return user.name;
//   }
// });

// console.table(getUsersWithFriend);
// console.table(getUsersWithFriend1);

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// =====================================#9==============================================
// const getNamesSortedByFriendsCount = users.sort(function (a, b) {
//   return a.friends.length - b.friends.length;
// });
// console.table(getNamesSortedByFriendsCount);

// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(users => users.name);
// };
// console.log(getNamesSortedByFriendsCount(users));

// =====================================#10===============================================

// const getSortedUniqueSkills = users.reduce(function (skills, user) {
//   skills.push(...user.skills);
//   return skills;
// }, []);

// console.log(getSortedUniqueSkills);

// const gerSorted1 = getSortedUniqueSkills.reduce(function (acc, skill) {
//   return acc.includes(skill) ? acc : [...acc, skill];
// }, []);

// OR

// const getSortedUniqueSkills = users
//   .reduce(function (skills, user) {
//     skills.push(...user.skills);
//     return skills;
//   }, [])
//   .reduce(function (acc, skill) {
//     return acc.includes(skill) ? acc : [...acc, skill];
//   }, []);

// console.log(gerSorted1);

// const getSortedUniqueSkills = users =>
//   users
//     .reduce((skills, user) => {
//       skills.push(...user.skills);
//       return skills;
//     }, [])
//     .reduce((acc, skill) => {
//       return acc.includes(skill) ? acc : [...acc, skill];
//     }, []);

// console.log(getSortedUniqueSkills(users));
