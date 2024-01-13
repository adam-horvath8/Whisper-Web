export type errorMessageType = string | undefined;

export type loginValuesType = {
  username: string;
  password: string;
};

export type registerValuesType = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type currentUserType = {
  id: string;
  username: string;
};

export type toastMessageType = {
  message: string;
};

export type postType = {
  id: string;
  text: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  replytoId: string;
  user: userType;
};

export type postsType = postType[];

export type userType = {
  id: string;
  username: string;
  profile?: profileType;
};

export type usersType = userType[];

export type profileType = {
  id: string;
  userId: string;
  name?: string;
  surname?: string;
  address?: string;
  description?: string;
  profileImg?: string;
};
