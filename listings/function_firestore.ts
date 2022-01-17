export const onMessageSentUpdateLast = functions.firestore
  .document("offers/{offerId}/messages/{messageId}")
  .onCreate(async (snapshot, context) => {
    // function body
  });