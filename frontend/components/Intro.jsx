const Intro = (props) => {
    const skip = () => {
        localStorage.setItem('firstLoad', 'false')
    }

    console.log(props)

    return(
        <>
        <h1>Intro</h1>
        <button onClick={() => {
            props.checkLoad()
            skip()
        }}>Пропустить</button>
        </>
    )
};

export default Intro;