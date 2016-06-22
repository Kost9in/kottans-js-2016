module.exports = (users) =>
  (checkUsers) =>
    checkUsers.every((checkUser) =>
      users.some((user) => checkUser.id === user.id && checkUser.name === user.name));
