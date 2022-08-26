import Formulario from './Formulario';
import Resultado from './Resultado';
import useClima from '../hooks/useClima';
import Spinner from './Spinner';

const AppClima = () => {
	const { resultado, cargando, sinResultado } = useClima();

	return (
		<>
			<main className="dos-columnas">
				<Formulario />

				{cargando ? (
					<Spinner />
				) : resultado?.name ? (
					<Resultado />
				) : sinResultado ? (
					<p>{sinResultado}</p>
				) : (
					<p>El clima se va a mostrar aquí</p>
				)}
			</main>
		</>
	);
};

export default AppClima;
