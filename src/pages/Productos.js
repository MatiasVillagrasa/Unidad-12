import React from 'react';
import '../styles/components/pages/Productos.css';

const ProductosPage = (props) => {
    return (
        <main className="mProductos">
            <h1>Productos</h1>
            <div className="tarjetas">
                <div className="tarjeta">
                    <img src="https://via.placeholder.com/450x400?text=Tybo" alt="Tybo" />
                    <h1>Tybo Feteado</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quod, quos cumque nisi, repellendus
                        voluptate animi possimus, est sequi numquam excepturi distinctio illum culpa mollitia vitae
                        asperiores dolor dolorum delectus!</p>
                </div>
                <div className="tarjeta">
                    <img src="https://via.placeholder.com/450x400?text=Cremoso" alt="Cremoso" />
                    <h1>Cremoso Trozado</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis libero, pariatur optio assumenda nisi
                        soluta. Autem cumque error, debitis iure excepturi natus voluptatem officiis dolorum sint harum.</p>
                </div>
                <div className="tarjeta">
                    <img src="https://via.placeholder.com/450x400?text=Mozzarella" alt="Mozzarella" />
                    <h1>Mozzarella Feteado</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil mollitia autem minima, in
                        dolorem sapiente quod consequatur dolores ut hic dicta aspernatur ipsum ea cum a. Qui, nihil
                        assumenda?</p>
                </div>
            </div>
        </main>
    );
}

export default ProductosPage;