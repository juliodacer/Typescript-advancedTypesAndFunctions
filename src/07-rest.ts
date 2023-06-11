import { ROLES, User } from './01-enum';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

export const checkRole = (roles: string[]) => {
  return roles.length > 0
};

// console.log(checkRole(['AAA', 'BBB', 'CCC']));

export const checkRoleV2 = (...roles: string []) => {
  return roles.includes(currentUser.role)
}

console.log(checkRoleV2('aa', 'bb', 'cc', 'dd', 'eee', 'ff', 'gg', 'hh', 'iii', 'rr', ROLES.CUSTOMER))
