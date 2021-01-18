/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatUser = /* GraphQL */ `
  subscription OnCreateChatUser {
    onCreateChatUser {
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
export const onUpdateChatUser = /* GraphQL */ `
  subscription OnUpdateChatUser {
    onUpdateChatUser {
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
export const onDeleteChatUser = /* GraphQL */ `
  subscription OnDeleteChatUser {
    onDeleteChatUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      chatUser {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
