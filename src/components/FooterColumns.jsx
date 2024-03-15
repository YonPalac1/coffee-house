export default function FooterColumns({direction, title, list}) {
    return <div className={`${direction}`}>
        <h3>{title}</h3>
        <p>{list}</p>
    </div>
}