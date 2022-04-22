//File : src/components/DetailProduk.js
import { useParams } from 'react-router-dom';
const DetailProduk = () => {
    const{ id }=useParams();
    return ( 
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5">Produk</h1>
                <p>Nilai Parameter produk adalah: {id}</p>
            </div>
        </main>
     );
}
 
export default DetailProduk;