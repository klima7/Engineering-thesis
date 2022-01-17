export const onProfileImageDeleted = functions.storage.object()
  .onDelete(async (object) => {
    // function body
  });