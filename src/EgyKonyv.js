import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function EgyKonyv() {
    const { id } = useParams();
    const [konyv, setKonyv] = useState({});
    const [editedKonyv, setEditedKonyv] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:5001/Konyv/${id}`)
            .then(response => {
                setKonyv(response.data);
                setEditedKonyv(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`https://localhost:5001/Konyv/${id}`)
            .then(response => {
                console.log('Book deleted successfully:', response.data);
                setKonyv({});
            })
            .catch(error => {
                console.error('Error deleting book:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedKonyv({ ...editedKonyv, [name]: value });
    };

    const handleSave = () => {
        axios.put(`https://localhost:5001/Konyv/${id}`, editedKonyv)
            .then(response => {
                console.log('Book data updated successfully:', response.data);
                setKonyv(editedKonyv);
            })
            .catch(error => {
                console.error('Error updating book data:', error);
            });
    };

    return (
        <div style={{margin: '10px', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={konyv.kepneve} />
                <Card.Body>
                    <Card.Title>
                        <input
                            type="text"
                            name="nev"
                            value={editedKonyv.nev || ''}
                            onChange={handleInputChange}
                        />
                    </Card.Title>
                    <Card.Text>
                        Kiadási év: 
                        <input
                            type="text"
                            name="kiadasEve"
                            value={editedKonyv.kiadasEve || ''}
                            onChange={handleInputChange}
                        />
                    </Card.Text>
                    <Card.Text>
                        A könyv értékelése: 
                        <input
                            type="text"
                            name="ertekeles"
                            value={editedKonyv.ertekeles || ''}
                            onChange={handleInputChange}
                        />
                    </Card.Text>
                    <Button style={{margin: '10px'}} variant="primary" onClick={handleSave}>Save</Button>
                    <Button style={{margin: '10px'}} variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EgyKonyv;
