import React, { useEffect, useRef, useState } from 'react';
import "styles/estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { nanoid } from "nanoid";
import { Tooltip, Dialog } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import { Toaster, toast } from 'react-hot-toast';

const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(false);
    //variable para obtener las ventas
    const [ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState("Registrar venta");
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        const obtenerVentas = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/ventas' };
            await axios.request(options).then(function (response) {
                setVentas(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
        if (ejecutarConsulta) {
            obtenerVentas();
            setEjecutarConsulta(false);
        };

    }, [ejecutarConsulta])

    //método effect para obtener las ventas de la base de datos
    useEffect(() => {
        if (mostrarTabla) {
            setEjecutarConsulta(true);
        }
    }, [mostrarTabla]);

    //useEffect para cambiar el contenido del texto del botón

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("Crear nueva venta");
        } else {
            setTextoBoton("Listar Ventas")
        }
    }, [mostrarTabla]);

    return (
        <div className="style">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossorigin="anonymous"
            />
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&family=Noto+Sans:wght@700&family=Raleway&
                display=swap');
            </style>
            <title>Ventas</title>
            <header className="font center">Administrar ventas</header>
            {
                mostrarTabla ? (
                    <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
                ) : (
                    <FormularioRegistroVentas setMostrarTabla={setMostrarTabla} listaVentas={ventas} setVentas={setVentas} />
                )
            }

            <div className="contentSells margen center">
                <button onClick={() => setMostrarTabla(!mostrarTabla)} type="button" className="btn btn-primary btn-flat margen">
                    {textoBoton}
                </button>
            </div>
            <div><Toaster /></div>

            <mostrarTabla setMostrarTabla />

            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
    )
}

//Formulario para registrar ventas
const FormularioRegistroVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        //conexión a la DB
        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        const options = {
            method: 'POST', url: 'http://localhost:5000/ventas/',
            headers: { 'Content-Type': 'application/json' },
            data: {
                idVenta: nuevaVenta.idVenta,
                idProducto: nuevaVenta.idProducto,
                cantProd: nuevaVenta.cantProd,
                valorUnit: nuevaVenta.valorUnit,
                idCliente: nuevaVenta.idCliente,
                nombreCliente: nuevaVenta.nombreCliente,
                fechaVenta: nuevaVenta.fechaVenta,
                vendedor: nuevaVenta.vendedor,
                estadoVenta: nuevaVenta.estadoVenta,
                valTotalVenta: nuevaVenta.valTotalVenta
                //nombres: nuevoUsuario.nombres
            },
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta creada con éxito', {
                position: "bottom-center",
                autoClose: 5000,
            });
            console.log('Venta agregada con éxito');
        }).catch(function (error) {
            console.error(error);
            toast.error('No se pudo crear la venta', {
                position: "top-right",
                autoClose: 5000,
            });
            console.error('Error creando una venta');
        });

        setMostrarTabla(true);
        console.log('Venta creada');
    };

    return (
        <div>
            <h2 class="subtitle">Gestión de ventas</h2>
            <div className="center">
                <form ref={form} onSubmit={submitForm}>
                    <legend>
                        Registro de ventas
                        <i class="fas fa-business-time"></i>
                    </legend>
                    <div className="margen">
                        <label htmlFor="idVenta">Identificador de venta
                            <input type="text" placeholder="Id venta" name="idVenta" />
                        </label><br />
                        <label htmlFor="idProducto">Identificador de producto
                            <input type="text" placeholder="Id producto" name="idProducto" />
                        </label>
                        <label htmlFor="cantProd">Cantidad producto
                            <input type="text" placeholder="Cant producto" name="cantProd" />

                        </label><br />
                        <label htmlFor="valorUnit">Precio unitario producto
                            <input type="text" placeholder="Prec Unit" name="valorUnit" />

                        </label><br />
                        <label htmlFor="idCliente">Identificador de cliente
                            <input type="text" placeholder="Id cliente" name="idCliente" />

                        </label>
                        <label htmlFor="nombreCliente">Nombre de cliente
                            <input type="text" placeholder="Nombre cliente" name="nombreCliente" />

                        </label><br />
                        <label htmlFor="fechaVenta">Fecha de venta
                            <input type="date" placeholder="" name="fechaVenta" />
                        </label><br />
                        <label htmlFor="vendedor">Nombre de vendedor
                            <input type="text" placeholder="Nombre vendedor" name="vendedor" />
                        </label><br />
                        <label htmlFor="estadoVenta">Estado de venta
                            <select name="estadoVenta" id="">
                                <option value={0} >En proceso</option>
                                <option >Cancelado</option>
                                <option >Entregado</option>
                            </select>
                        </label><br />
                        <label htmlFor="valTotalVenta">Valor total venta
                            <input type="text" placeholder="Valor total" name="valTotalVenta" />
                        </label><br />
                    </div>
                    <button type="submit" className="btn btn-primary btn-flat margen">
                        Registrar venta
                    </button>
                </form>
            </div>
        </div>

    );




}

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    //Efect para devolver una lista filtrada
    useEffect(() => {
        setVentasFiltradas(
            listaVentas.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaVentas]);

    useEffect(() => {
        console.log("Listado de ventas en el componente de la tabla", listaVentas
        );
    }, [listaVentas]);

    return (
        <div>
            <h1 class="subtitle">Ventas Realizadas</h1>
            <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar"
                className="" />
            <legend>
                Listado de ventas realizadas
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                </svg>
            </legend>
            <table className="tabla">
                <thead>
                    <tr className="contentForm">
                        <th>Id venta</th>
                        <th>Identificador de producto</th>
                        <th>Cantidad producto</th>
                        <th>Val Unit producto</th>
                        <th>Doc id de cliente</th>
                        <th>Nombre cliente</th>
                        <th>Fecha de venta</th>
                        <th>Nombre vendedor</th>
                        <th>Estado venta</th>
                        <th>Val Total venta</th>
                        <th>Acciones Edit-Del</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ventasFiltradas.map((ventas) => {
                            return (
                                <FilaVenta key={nanoid()} ventas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
                            );
                        })}
                </tbody>
            </table>
        </div>
    )
}

const FilaVenta = ({ ventas, setEjecutarConsulta }) => {
    console.log('Venta', ventas);
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    //método para cargar la información de una venta
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        idVenta: ventas.idVenta,
        idProducto: ventas.idProducto,
        cantProd: ventas.cantProd,
        valorUnit: ventas.valorUnit,
        idCliente: ventas.idCliente,
        nombreCliente: ventas.nombreCliente,
        fechaVenta: ventas.fechaVenta,
        vendedor: ventas.vendedor,
        valTotalVenta: ventas.valTotalVenta,
        estadoVenta: ventas.estadoVenta,
    })
    //método para actualizar ventas
    const actualizarVenta = async () => {
        console.log(infoNuevaVenta);
        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/ventas/${ventas._id}/`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevaVenta }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            //Toast.succes
            toast.success('Venta actualizada con éxito', {
                position: "bottom-center",
                autoClose: 5000,
            });
            console.log("Venta actualizada con éxito");
            setEdit(false);
            setEjecutarConsulta(true);
        }).catch(function (error) {
            //toast.error
            toast.error('Error actualizando la venta', {
                position: "top-right",
                autoClose: 5000,
            });
            console.error(error);
        });
    };

    //método para eliminar una venta
    const eliminarVenta = async () => {
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/ventas/${ventas._id}/`,
            headers: { 'Content-Type': 'application/json' },
            data: { id: ventas._id }
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                //Toast.succes
                toast.success('Venta eliminada con éxito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                console.log("Venta eliminada con éxito");
                setEjecutarConsulta(true);
            }).catch(function (error) {
                //toast.error
                toast.error('No se pudo eliminar la venta', {
                    position: "top-right",
                    autoClose: 5000,
                });
                console.error(error);
                console.log("Error eliminando la venta");

            });
    };

    return (
        <tr>
            {edit ?
                <>
                    <td>
                        <input type="text" value={infoNuevaVenta.idVenta} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, idVenta: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.idProducto} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, idProducto: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.cantProd} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantProd: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.valorUnit} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, valorUnit: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.idCliente} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, idCliente: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.nombreCliente} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nombreCliente: e.target.value })} />
                    </td>
                    <td>
                        <input type="date" value={infoNuevaVenta.fechaVenta} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fechaVenta: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.vendedor} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, vendedor: e.target.value })} />
                    </td>
                    <td>
                        <select name="estadoVenta" id="" value={infoNuevaVenta.estadoVenta} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estadoVenta: e.target.value })}>
                            <option value={0} >En Proceso</option>
                            <option >Cancelada</option>
                            <option >Entregada</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.valTotalVenta} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, valTotalVenta: e.target.value })} />
                    </td>

                </>
                :
                <>
                    <td>{ventas.idVenta}</td>
                    <td>{ventas.idProducto}</td>
                    <td>{ventas.cantProd}</td>
                    <td>{ventas.valorUnit}</td>
                    <td>{ventas.idCliente}</td>
                    <td>{ventas.nombreCliente}</td>
                    <td>{ventas.fechaVenta}</td>
                    <td>{ventas.vendedor}</td>
                    <td>{ventas.estadoVenta}</td>
                    <td>{ventas.valTotalVenta}</td>

                </>
            }
            <td>
                <div className="center">
                    {edit ? (
                        <>
                            <Tooltip title="Confirmar Edición" arrow>
                                <i text="Editar" className="mini" onClick={() => actualizarVenta()} class="fas fa-check"></i>
                            </Tooltip>
                            <Tooltip title="Cancelar Edición" arrow>
                                <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-ban"></i>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title="Editar Venta" arrow>
                                <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-pencil-alt"></i>
                            </Tooltip>

                            <Tooltip title="Eliminar Venta" arrow>
                                <i className="mini" onClick={() => setOpenDialog(true)} class="fas fa-trash"></i>
                            </Tooltip>
                        </>
                    )}
                </div>
                <Dialog open={openDialog}>
                    <div className="contentForm margen">
                        <h1>¿Está seguro de eliminar la venta?</h1>
                        <div className="center margen">
                            <button onClick={() => eliminarVenta()} type="button" class="btn btn-outline-success margen" >Sí</button>
                            <button onClick={() => setOpenDialog(false)} type="button" class="btn btn-outline-danger margen">No</button>
                        </div>
                    </div>
                </Dialog>
            </td>
        </tr>
    )
}


export default Ventas
