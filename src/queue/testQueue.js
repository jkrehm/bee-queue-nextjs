import Queue from "bee-queue";

const queue = new Queue("test", {
  redis: {
    host: "127.0.0.1",
    port: 6379,
  },
});

export default queue;
