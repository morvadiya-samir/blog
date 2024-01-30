async function onSubmit(event) {

    event.preventDefault()

    const formData = new FormData(event.target)
    console.log(formData.values())
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="inputField" value={inputValue} name="input"
 onChange={(event) => setInputValue(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )