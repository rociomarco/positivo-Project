export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contact: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Chats: undefined;
  Contact: undefined;
  Groups: undefined;
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
  imageUri: String;
  age: String;
  distance: String;
}

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}
