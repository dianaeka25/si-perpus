import React, { useState } from 'react';
import Layout from '@/widget/layout';
import { db } from "@/config/firebase";
import { collection, addDoc, CollectionReference } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Judul from '@/components/Header/judul';

const TambahBuku = () => {
    const [namaBuku, setNamaBuku] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [deskripsibuku, setDeskripsiBuku] = useState("");
    const [tahunterbit, setTahunTerbit] = useState("");

    const router = useRouter();

    const bukuCollectionRef = collection(db, "buku")

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await addDoc(bukuCollectionRef, {
                nama_buku: namaBuku,
                pengarang: pengarang,
                deskripsi_buku: deskripsibuku,
                tahun_terbit: tahunterbit,
            });
            router.push("/");
        } catch(err) {
            console.log(err);
        }
    };

  return (
    <Layout>
    <div className="flex justify-center mx-2 mt-10">
        <div className="w-[550px] rounded-lg shadow-gray-200 shadow-lg p-10">
            {/* {judul} */}
            <Judul title="Form Tambah Buku" />
             {/* {form tambah} */}
    <form onSubmit={submitHandler}>
        <div className='mb-3'>
            <label className='text-md px-2'> 
                Nama Buku
            </label>
            <input type="text" className='mt-2 block w-11/12 rounded-xl border px-3 py-2'
            onChange={(e) => {
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
            onChange={(e) => {
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
            onChange={(e) => {
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
            onChange={(e) => {
                setTahunTerbit(e.target.value);
            }}
            value={tahunterbit}
            />
        </div>
        <button className='bg-sky-500 hover:bg-sky-700 px-16 py-2 ml-20 text-white rounded-full'>Simpan</button>
        </form>
    </div>
    </div>
  </Layout>
  );
};

export default TambahBuku;