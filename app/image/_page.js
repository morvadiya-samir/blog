"use client"

export default function page() {

    async function handlesubmit(e) {

        const data = new FormData(e.currentTarget);

        try {
            
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }

            console.log('title: "Successfully"')

        } catch (err) {
            console.error(err);
            console.log("Oops")
        }
    }

    return (
        <>
            <main>
                <form action={handlesubmit}>
                    <input type="file" name="file" />
                    <input type="submit" value="Upload" />
                </form>
            </main>
        </>
    );
}



