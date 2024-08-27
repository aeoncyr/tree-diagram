/* A Javascript program to create a tree diagram of the relationship
 * between users and sensor data Create a list of the parents from each
 * user in JSON format from user data JSON files, created to
 * fulfill the requirements of the CAD-IT Code Test.
 * Submitted by Fajar Wira Adikusuma
 */

import { readFileSync } from 'fs';

// Read user data from the JSON file
const rawUserData = readFileSync('user_data.json');
const userData = JSON.parse(rawUserData);

// Create a map to store users and their respective parent IDs
const userMap = new Map();

userData.forEach((user) => {
  userMap.set(user.user_id, {
    name: user.name,
    parent_id: user.parent_id,
  });
});

// Build the tree data structure
function buildTree(userId) {
  const user = userMap.get(userId);
  const children = [];
  userMap.forEach((value, key) => {
    if (value.parent_id === userId) {
      children.push(buildTree(key));
    }
  });

  return { name: user.name, children };
}

// Print the tree diagram in the CLI
function printTree(node, level = 0) {
  const indent = '  '.repeat(level);
  console.log(`${indent}${node.name}`);
  node.children.forEach((child) => printTree(child, level + 1));
}

// Create a list of parents for each user in JSON format
function findParents(userId) {
  const parents = [];
  let currentId = userId;

  while (currentId !== null) {
    const user = userMap.get(currentId);
    if (user) {
      parents.push(user.name);
      currentId = user.parent_id;
    } else {
      break;
    }
  }

  return parents.reverse();
}

// Output
console.log('Tree Diagram:');
const rootUserId = null; // The ID of the root user (boss). If null, assume the root has user_id = 1.
const tree = buildTree(rootUserId || 1);
printTree(tree);

console.log('\nList of Parents for Each User:');
const parentList = {};
userMap.forEach((user, userId) => {
  const parents = findParents(userId);
  parentList[user.name] = parents;
});
console.log(JSON.stringify(parentList, null, 2));