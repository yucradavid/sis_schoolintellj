import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"; // Asegúrate de importar los estilos personalizados

const Curso = () => {

    const [curso, setNombreCurso] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                const response = await axios.get('http://localhost:82/asignatura');
                console.log('Datos de cursos:', response.data); // Verifica los datos en la consola
                setNombreCurso(response.data);
            } catch (error) {
                console.error('Error fetching cursos:', error);
            }
        };
        fetchCurso();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:82/asignatura/${id}`);
            setNombreCurso(curso.filter(curso => curso.id !== id));
            console.log(`Docente eliminado con éxito: ${id}`);
        } catch (error) {
            console.error('Error al eliminar docente:', error);
        }
    };
    const handleNew = () => {
        navigate('/curso/form');
    };

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Cursos</h2>
                    <button className="btn btn-primary btn-custom" onClick={handleNew}>Nuevo</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Curso</th>
                                <th scope="col">Horas</th>
                                <th scope="col">Docente</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {curso.map(curso => (
                                <tr key={curso.id}>
                                    <td>{curso.id}</td>
                                    <td>{curso.setnombreCurso}</td>
                                    <td>{curso.sethorasAcademicas}</td>
                                    <td>{curso.docenteid}</td>
                                    <td>
                                    <button
                                            className="action-btn ms-2"
                                            onClick={() => handleDelete(curso.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>    
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default Curso;