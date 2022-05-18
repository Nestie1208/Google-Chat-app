# Google-Chat-app
Events in Google Chat  Most Apps Script interactions with Google Chat are event-driven. The interaction between the user, the Chat app, and Google Chat typically follows this sequence:      A user initiates an action, like adding a Chat app to a space, starting a direct message (DM) with a Chat app, or removing a Chat app from a space.     The action raises an event aimed at the Chat app in Google Chat.     Google Chat calls the corresponding event handler defined in the Chat app's script.  Google Chat raises four events that your app can listen for:      ADDED_TO_SPACE: This event occurs when a human user adds a Chat app to a space or a direct message (DM). In Apps Script, you define an onAddToSpace() function to handle this event.     REMOVED_FROM_SPACE: This event occurs when a user removes the Chat app from a space or DM. This event does not post a response back to Google Chat. In Apps Script, you define an onRemoveFromSpace() function to handle this event.     MESSAGE: This event occurs when a user messages the Chat app, either directly in a DM or as an @mention in a space. In Apps Script, you define an onMessage() function to respond to this event.     CARD_CLICKED: This event occurs when the user clicks a button with a custom action assigned to it. In Apps Script, you define an onCardClick() function to respond to this event.  Replace the contents of the Code.gs file with the following code that defines handlers for the ADDED_TO_SPACE and REMOVE_FROM_SPACE events. (You'll add handlers for the MESSAGE and CARD_CLICKED events later in this codelab.)
/**
 * Responds to an ADDED_TO_SPACE event in Google Chat.
 * @param {object} event the event object from Google Chat
 * @return {object} JSON-formatted response
 * @see https://developers.google.com/chat/api/guides/message-formats/events
 */
function onAddToSpace(event) {
  console.info(event);
  var message = 'Thank you for adding me to ';
  if (event.space.type === 'DM') {
    message += 'a DM, ' + event.user.displayName + '!';
  } else {
    message += event.space.displayName;
  }
  return { text: message };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Google Chat.
 * @param {object} event the event object from Google Chat
 * @see https://developers.google.com/chat/api/guides/message-formats/events
 */
function onRemoveFromSpace(event) {
  console.info(event);
  console.log('Chat app removed from ', event.space.name);
}
