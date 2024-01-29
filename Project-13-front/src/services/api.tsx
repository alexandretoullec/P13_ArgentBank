import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/";

/**
 * Get the connection token by making a POST request to the login endpoint.
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<any>} - Promise resolving to the authentication token
 */

export async function signIn(email: string, password: string): Promise<any> {
  try {
    const response = await axios.post(baseUrl + "user/login", {
      email,
      password,
    });
    return response.data.body.token;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get the user profile by making a POST request to the profile endpoint.
 * @param {string} token - Optional authentication token. If not provided, it attempts to use the token stored in localStorage.
 * @returns {Promise<any>} - Promise resolving to the user profile data
 */

export async function getUserProfile(token = null): Promise<any> {
  try {
    const response = await axios.post(
      baseUrl + "user/profile",
      {
        firstName: "",
        lastName: "",
      },
      {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token")
              ? localStorage.getItem("token")
              : token
          }`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Update the user profile by making a PUT request to the profile endpoint.
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @returns {Promise<any>} - Promise resolving to the updated user profile data
 */

export async function updateUserProfile(
  firstName: string,
  lastName: string
): Promise<any> {
  try {
    const response = await axios.put(
      baseUrl + "user/profile",
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    console.log(error);
  }
}
