//File: scr/components/Kontak.js
const Kontak=()=>{
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5">Kontak Kami</h1>
                <form>
                    <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Edward Jhon" />
                            <label>Nama Lengkap</label>
                    </div>
                    <div className="form-floating mb-3">
                            <input type="email" className="form-control" placeholder="nama@email.com" />
                            <label>Email</label>
                    </div>
                    <div class="form-floating">
                        <textarea className="form-control" placeholder="Tinggal komentar/saran/kritik"style={{height: '100px'}} ></textarea>
                        <label>Komentar/Saran/Kritik</label>
                    </div>
                    <button type="button" class="btn btn-danger btn-lg mt-2">Kirim</button>
                
                </form>
            </div>
       </main>
    );
}

export default Kontak;