import React from 'react';
import Layout from '@/widget/layout';
import Judul from '@/components/Header/judul';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "@/config/firebase";
import { trailingSlash } from '@/next.config';



const UbahBuku = () => {
    const [namaBuku, setNamaBuku]           = useState("");
    const [pengarang, setPengarang]         = useState("");
    const [deskripsibuku, setDeskripsiBuku] = useState("");
    const [tahunterbit, setTahunTerbit]     = useState("");
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;
        if (id) {
            const getBukuListById = async() => {
                const bukuDocRef = doc(db, "buku", id);
                try {
                    const docSnap = await getDoc(bukuDocRef);
                    const dataBuku = docSnap.data();
                    setNamaBuku(dataBuku.nama_buku);
                    setPengarang(dataBuku.pengarang);
                    setDeskripsiBuku(dataBuku.deskripsi_buku);
                    setTahunTerbit(dataBuku.tahun_terbit)
                    console.log(dataBuku);
                } catch (err) {
                    console.error(err);
                }
            };
            getBukuListById();
        }
    }, []);

    const handleUpdate = async (e) => {
        const id = router.query.id;
        const bukuDocRef = doc(db, "buku", id);
        e.preventDefault();
        try {
            await updateDoc(bukuDocRef, {
                nama_buku: namaBuku,
                pengarang: pengarang,
                deskripsi_buku: deskripsibuku,
                tahun_terbit: tahunterbit,
            });
            router.push("/");
        } catch (err) {
            console.error(err);
        }
    };

  return (
    <Layout>
    <div className="flex justify-center mx-2 mt-10">
        <div className="w-[550px] rounded-lg shadow-gray-200 shadow-lg p-10">
            {/* {judul} */}
           <Judul title="Form Ubah Buku" />
             {/* {form ubah buku */}
    <form onSubmit={handleUpdate}>
        <div className='mb-3'>
            <label className='text-md'> 
                Nama Buku
            </label>
            <input type="text" className='mt-2 block w-11/12 rounded-xl border px-3 py-2'
            onChange={ (e) => {
                setNamaBuku(e.target.value);
            }}
            value={namaBuku}
            />
        </div>
        <div className='mb-3'>
            <label className='text-md'> 
                Pengarang
            </label>
            <input type="text" className='mt-2 block w-11/12 rounded-xl border px-3 py-2'
             onChange={ (e) => {
                setPengarang(e.target.value);
            }}
            value={pengarang}
            />
        </div>
        <div className='mb-3'>
            <label className='text-md'> 
            Deskripsi Buku
            </label>
            <input type="text" className='mt-2 block w-11/12 rounded-xl border px-3 py-2'
             onChange={ (e) => {
                setDeskripsiBuku(e.target.value);
            }}
            value={deskripsibuku}
            />
        </div>
        <div className='mb-3'>
            <label className='text-md'> 
                Tahun Terbit
            </label>
            <input type="text" className='mt-2 block w-11/12 rounded-xl border px-3 py-2'
             onChange={ (e) => {
                setTahunTerbit(e.target.value);
            }}
            value={tahunterbit}
            />
        </div>
        <button  className='bg-sky-500 hover:bg-sky-700 px-16 py-2 ml-20 text-white rounded-full'>Simpan</button>
    </form>
        </div>
    </div>
   

  </Layout>
  )
}

export default UbahBuku