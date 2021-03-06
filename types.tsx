export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined
};

export type TopParamList = {
  Camera: undefined;
  Chat: undefined;
  Call: undefined;
  Status: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageurl: String; 
  status: String;
}

export type MessageChannel = {
  id: String;
  content: String;
  createdAt: String;
  user: User; 
}

export type ChatBox = {
  id: String;
  users: User[];
  recentMessage: MessageChannel;
};
