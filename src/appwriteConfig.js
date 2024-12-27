
import { Client, Account } from 'appwrite';
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRRITE_PROJECT_ID); 

const account = new Account(client);

export { account };
