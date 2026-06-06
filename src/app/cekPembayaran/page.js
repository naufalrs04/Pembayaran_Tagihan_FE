"use client";

import "@/app/globals.css";
import React, { useState } from "react";
import Link from "next/link";

const CekPembayaran = () => {
    const [tagihan, setTagihan] = useState([
        {
            id: 1,
            nama: "UKT Semester 1",
            jumlah: "Rp 1.000.000",
            status: "Belum Dibayar",
        },
        {
            id: 2,
            nama: "UKT Semester 2",
            jumlah: "Rp 1.000.000",
            status: "Belum Dibayar",
        },
    ]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F9F9F9]">
            <div className="w-full max-w-4xl p-6">
                <h1 className="text-3xl font-bold text-cyan-500 mb-6 text-center">
                    Daftar Tagihan
                </h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden bg-gradient-to-r from-[#7FD8E8] to-[#0798C5] p-6">
                    <table className="w-full table-auto">
                        <thead className="bg-white text-cyan-500">
                            <tr>
                                <th className="px-4 py-2 text-left">Nama Tagihan</th>
                                <th className="px-4 py-2 text-left">Jumlah</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tagihan.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="px-4 py-2">{item.nama}</td>
                                    <td className="px-4 py-2">{item.jumlah}</td>
                                    <td className="px-4 py-2">{item.status}</td>
                                    <td className="px-4 py-2 ">
                                        {item.status === "Belum Dibayar" ? (
                                            <Link
                                                href={`/pembayaran/${item.id}`}
                                                className="text-white hover:underline"
                                            >
                                                Bayar
                                            </Link>  
                                        ) : (
                                            <span className="text-green-500">Lunas</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CekPembayaran;