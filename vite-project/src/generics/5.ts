export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleStatus = Record<UserRole, string>

const RoleDescription:UserRoleStatus = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

// console.log(RoleDescription);
