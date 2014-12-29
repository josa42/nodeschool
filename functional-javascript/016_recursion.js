// Recursion

function getDependencies(tree, all) {

  all = all || [];

  var deps = tree.dependencies || [];

  Object.keys(deps).forEach(function(key) {

    var dep = deps[key],
      name = key + '@' + dep.version;

    if (all.indexOf(name) === -1) {
      all.push(name);
    }

    getDependencies(dep, all);
  });

  return all.sort();
}

module.exports = getDependencies;
