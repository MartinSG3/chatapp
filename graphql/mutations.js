/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageurl
      status
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageurl
      status
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageurl
      status
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatUser = /* GraphQL */ `
  mutation CreateChatUser(
    $input: CreateChatUserInput!
    $condition: ModelChatUserConditionInput
  ) {
    createChatUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageurl
        status
        createdAt
        updatedAt
      }
      chatRoom {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatUser = /* GraphQL */ `
  mutation UpdateChatUser(
    $input: UpdateChatUserInput!
    $condition: ModelChatUserConditionInput
  ) {
    updateChatUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageurl
        status
        createdAt
        updatedAt
      }
      chatRoom {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatUser = /* GraphQL */ `
  mutation DeleteChatUser(
    $input: DeleteChatUserInput!
    $condition: ModelChatUserConditionInput
  ) {
    deleteChatUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageurl
        status
        createdAt
        updatedAt
      }
      chatRoom {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
