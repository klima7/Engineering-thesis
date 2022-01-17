export const finishEndedAtMidnight = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("Europe/Warsaw")
  .onRun((context) => {
    // function body
  });