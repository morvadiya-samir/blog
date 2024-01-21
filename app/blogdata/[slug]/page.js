export default function slug({ params }) {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     loadPost();
    // }, []);

    // const loadPost = async () => {
    //     fetch("/api/blogs").then((d) => {
    //         d.json().then((e) => {
    //             setData(e)
    //         })
    //     })

        return (
            <div>{params.slug}</div>
        )
    // }
}
