export default async function page() {

    async function Submit(e) {
        "use server"
        e.preventDefault()
        console.log(e);
        const { userfile } = e;
        const data = new FormData();
        data.append("file", userfile[0]);
        fetch("/api/upload", {
            method: "POST",
            // headers: {
            //   "Content-Type": "multipart/form-data"
            // },
            body: data
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <main>
            <h1>React Server Component: Upload</h1>
            <form onSubmit={Submit}>
                <input type="file" name="file" />
                <input type="submit" value="Upload" />
            </form>
        </main>
    );
}




