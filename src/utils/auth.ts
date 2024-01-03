// utils/auth.ts
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
  ISignUpResult,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_cQNxa29We",
  ClientId: "4g4ik6ai3odevkaob16rqo93p",
};

export const userPool = new CognitoUserPool(poolData);

export const signIn = (
  username: string,
  password: string,
  onSuccess: (session: CognitoUserSession) => void,
  onFailure: (error: Error) => void
) => {
  const authenticationData = {
    Username: username,
    Password: password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess,
    onFailure,
    newPasswordRequired: (userAttributes, requiredAttributes) => {
      // Handle new password requirement if needed
    },
  });
};

export const register = async (
  username: string,
  password: string,
  email: string,
  onSuccess: (result: ISignUpResult | undefined) => void,
  onFailure: (error: Error) => void
) => {
  const attributeList = [
    new CognitoUserAttribute({
      Name: "email",
      Value: email,
    }),
    new CognitoUserAttribute({
      Name: "name",
      Value: username,
    }),
  ];

  userPool.signUp(username, password, attributeList, [], (err, result) => {
    if (err) {
      onFailure(err);
    } else {
      onSuccess(result);
    }
  });
};

export const getCurrentUser = (
  onSuccess: (attributes: any) => void,
  onFailure: (error: Error) => void
) => {
  const cognitoUser = userPool.getCurrentUser();

  if (cognitoUser) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        onFailure(err);
        return;
      }

      cognitoUser.getUserAttributes((attributeErr, result) => {
        if (attributeErr) {
          onFailure(attributeErr);
          return;
        }
        if (!result) {
          onFailure(new Error("No se encontraron atributos"));
          return;
        }
        const attributes = result.reduce((acc, attribute) => {
          acc[attribute.getName()] = attribute.getValue();
          return acc;
        }, {} as Record<string, string>);

        onSuccess(attributes);
      });
    });
  } else {
    onFailure(new Error("No se encontró un usuario logueado"));
  }
};

export const signOut = () => {
  const cognitoUser = userPool.getCurrentUser();

  if (cognitoUser) {
    cognitoUser.signOut();
  }
};
