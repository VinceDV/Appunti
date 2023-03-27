// questo e' un file pronto per diventare un componente React
// il modo piu' semplice per creare un componente React e' una funzione
// questa funzione dovra' ritornare della sintassi JSX

// per buona prassi, chiamare la funzione ESATTAMENTE come il file
const Header = function() {
    return <h1 className="text=red">Ciao</h1> //mettere return e' fondamentale
}

export default Header // questa riga e' FONDAMENTALE e permette al componente di essere IMPORTATO altrove
// <> e' un REACT FRAGMENT