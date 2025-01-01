/**
 * Generate a unique ID by combining the current timestamp and a random number.
 *
 * this function creates an identifier using the current time in milliseconds
 * (converted to a base-36 string) concatenated with a random number,
 * also converted to a base-36 string and sliced to remove unnecessary characters.
 * @returns {string} A unique identifier string.
 */
export default function generateID() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
}
