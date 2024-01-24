export function TwitterFollowCard({ userName, name, isFollowing}) {
  return (
    <article className="tw-followCard" style={{ display: "flex", color: "#fff", alignItems: "center" }}>
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Diego el lindo"
          src={`./src/assets/${userName}.png`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}