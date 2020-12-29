import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin",
    email: "admin@goodmart.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sam Smith",
    email: "sam@goodmart.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mark Brown",
    email: "mark@goodmart.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
