// props e' un oggetto
// avra' come proprieta' tutte le prop che io ho passato all'invocazione del componente
// props.printedName
// props.colorOfTheText

const Benvenuto = (props) => {
    console.log('Ecco il messaggio di benvenuto')
    return (
        <div className="ciao">
            <p>Benvenuto nel mio sito, {props.printedName}!</p>
        </div>
    )
}
export default Benvenuto