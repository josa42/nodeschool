// Async Loops

function loadUsers(userIds, load, done) {
  var left = userIds.length,
    users = [];

  userIds.forEach(function(id, idx) {
    load(id, function(user) {
      users[idx] = user;
      if (--left === 0) done(users);
    });
  });
}

module.exports = loadUsers;
