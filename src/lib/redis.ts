import Redis from "ioredis";

// You can get the REDIS_URL from your environment variables
const REDIS_URL = process.env.REDIS_URL || "";

const connection = new Redis(REDIS_URL, {
    maxRetriesPerRequest: null, // Ensure this is set to null for BullMQ compatibility
  });

export { connection };
