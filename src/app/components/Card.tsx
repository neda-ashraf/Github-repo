type CardProps = {
    reponame: string,
    visibility: string,
    forks: number,
    stars: number
}

export default function RepoCard(props: CardProps) {
    return (
        <div className="box">
            <h3>Name: {props.reponame}</h3>
            <h3>Visisbility: {props.visibility}</h3>
            <h3>Forks: {props.forks}</h3>
            <h3>Stars: {props.stars}</h3>

        </div>
    )
}