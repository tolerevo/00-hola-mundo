export function TwitterFollowCard() {
  return (
    <article className="tw-followCard" style={{ display: "flex", color: "#fff", alignItems: "center" }}>
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Diego el lindo"
          src="src/assets/64a8642a73cdf9001b816053_572760700.png"
        />
        <div className="tw-followCard-info">
          <strong>Tolerevo</strong>
          <span className="tw-followCard-infoUserName">@tolerevo</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}