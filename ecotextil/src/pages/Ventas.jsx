import React from 'react';
import "styles/estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Ventas = () => {
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
            <header className="font center">Administrar ventas</header>
            <div classname="contentSells">
                <section>
                    <div>
                        <form action="" className="contentForm">
                            <h1 class="subtitle">Gestión de ventas</h1>
                            <fieldset>
                                <legend>
                                    Registro de ventas
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-bag" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </legend>
                                <label for="">Identificador de venta
                                    <input type="text" placeholder="Id venta" /><br />

                                </label>
                                <label for="">Identificador de producto
                                    <input type="text" placeholder="Id producto" />

                                </label>
                                <label for="">Cantidad producto
                                    <input type="text" placeholder="Cant producto" /><br />

                                </label>
                                <label for="">Precio unitario producto
                                    <input type="text" placeholder="Prec Unit" /><br />

                                </label>
                                <label for="">Identificador de cliente
                                    <input type="text" placeholder="Id cliente" />

                                </label>
                                <label for="">Nombre de cliente
                                    <input type="text" placeholder="Nombre cliente" /><br />

                                </label>
                                <label for="">Fecha de venta
                                    <input type="date" placeholder="" /><br />

                                </label>
                                <label for="">Nombre de vendedor
                                    <input type="text" placeholder="Nombre" /><br />

                                </label>
                                <label for="">Valor total venta

                                    <input type="text" placeholder="Valor total" /><br />
                                </label>
                            </fieldset>
                            <div class="margen">
                                <label for="Estado de venta">Estado de venta
                                    <select name="estado" id="">
                                        <option value="en proceso">En proceso</option>
                                        <option value="cancelado">Cancelado</option>
                                        <option value="etregado">Entregado</option>
                                    </select>

                                </label>
                            </div>
                            <div class="col-xs-4 margen">
                                <button type="button" class="btn btn-primary">Actualizar</button>
                                <button type="button" class="btn btn-primary btn-flat">Buscar</button>
                                <button type="button" class="btn btn-primary btn-flat">Listar</button>
                                <button type="button" class="btn btn-primary btn-flat">Quitar</button>
                                <button type="button" class="btn btn-primary btn-flat">Registrar</button><br />

                            </div>
                        </form>
                    </div>
                    <div>
                        <h1 class="subtitle">Ventas Realizadas</h1>
                        <legend>
                            Listado de ventas realizadas
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-bag-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                            </svg>
                        </legend>
                        <table class="table">
                            <tr class="contentForm">
                                <th>Identificador de venta</th>
                                <th>Identificador de producto</th>
                                <th>Cantidad producto</th>
                                <th>Precio Unit producto</th>
                                <th>Identificador de cliente</th>
                                <th>Nombre de cliente</th>
                                <th>Fecha de venta</th>
                                <th>Nombre de vendedor</th>
                                <th>Valor total venta</th>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Ventas
