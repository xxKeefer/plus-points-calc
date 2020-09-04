import React from 'react'

export default function NotifyPanel({colour, msgTitle, msgBody, hidden }) {
  let showClass = hidden ? 'hidden' : 'show';
  return (
    <article class={`message is-small is-${colour} ${showClass}`}>
      <div class="message-header">
        <p>{msgTitle}</p>
      </div>
      <div class="message-body">
        {msgBody}
      </div>
    </article>
  )
}
