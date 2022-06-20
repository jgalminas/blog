export default function Tags({ tags }) {
    return (
        <div className='tags gap-10'>
            {tags.map((tag) => {
                return <div key={tag}> { tag[0].toUpperCase() + tag.substring(1) } </div>
            })}
        </div>
    )
}