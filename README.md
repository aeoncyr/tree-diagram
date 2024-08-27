# Tree Diagram Relationship

This program created to fulfill the requirements of the CAD-IT Code Test, submitted by Fajar Wira Adikusuma. This is a JavaScript program that processes user data stored in a JSON file, constructs a tree diagram representing the relationship between users, and creates a list of parents for each user in JSON format, and presents the results in the Command Line Interface (CLI).

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [JSON Data Format](#json-data-format)
5. [Functions](#functions)
6. [Output](#output)

## Prerequisites

Before running the program, you need to have Node.js and npm (Node Package Manager) installed on your system.

## Installation

1. Clone the repository or download the JavaScript file `tree_diagram.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory containing `tree_diagram.js`.
4. Install the required Node.js packages by running the following command:
```sh
npm install fs
```

## Usage

To use the program, follow these steps:

1. Ensure the `user_data.json` file is present in the same directory as `tree_diagram.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory containing `tree_diagram.js`.
4. Run the program using Node.js:
```sh
node tree_diagram.js
```

## JSON Data Format

The `user_data.json` file contains an array of user data objects. Each object has the following properties:

- `user_id`: An integer representing the ID of the user.
- `parent_id`: An integer representing the ID of the parent user (if null, the user has no boss).
- `name`: A string representing the name of the user.

## Functions

The program includes the following functions:

- `buildTree(userId)`: A recursive function that constructs a tree data structure representing the relationship between users. It returns an object with the user's name and an array of its children.
- `printTree(node, level)`: A recursive function that prints the tree diagram in the CLI. It takes the node object and the level of indentation as input.
- `findParents(userId)`: A function that finds and returns a list of parents for a given user ID. The list is sorted from the closest parent to the top parent.

## Output

The program generates two outputs in the CLI:

1. **Tree Diagram**: The program generates and prints the tree diagram representing the relationship between users. The tree diagram displays users and their hierarchical relationships in a nested structure.

Example Output:
```
Tree Diagram:
UserA
  UserB
    UserD
    UserE
  UserC
    UserF
    UserG
```

2. **List of Parents for Each User**: The program creates a JSON object with a list of parents for each user. The object's key is the user's name, and the value is an array of parent names (sorted from the closest parent to the top parent).

Example Output:
```json
{
  "UserA": [],
  "UserB": ["UserA"],
  "UserC": ["UserA"],
  "UserD": ["UserA", "UserB"],
  "UserE": ["UserA", "UserB"],
  "UserF": ["UserA", "UserC"],
  "UserG": ["UserA", "UserC"]
}
```
