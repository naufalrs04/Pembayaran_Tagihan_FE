"use client" ;

import "@/app/globals.css";
import React, { useState } from "react";

const cekMutasi = () => {
    const [mutasi, setMutasi] = useState([
        {
            id: 1,
            jenis: "Pembayaran Uang Praktikum",
            nominal: "Rp 1.000.000",
            tanggal: "5 Juni 2026",
            status: "Paid",
        },
        {
            id: 2,
            jenis: "Pembayaran UKT Semester 8",
            nominal: "Rp 6.000.000",
            tanggal: "1 Juni 2026",
            status: "Paid",
        }
    ]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F9F9F9]">
            <div className="w-full max-w-4xl p-6">
                <h1 className="text-3xl font-bold text-cyan-500 mb-6 text-center">
                        Daftar Mutasi
                </h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden bg-gradient-to-r from-[#7FD8E8] to-[#0798C5] p-6">
                    <table className="w-full table-auto">
                        <thead className="bg-white text-cyan-500">
                            <tr>
                                <th className="px-4 py-2 text-left">Jenis Pembayaran</th>
                                <th className="px-4 py-2 text-left">Nominal Pembayaran</th>
                                <th className="px-4 py-2 text-left">Tanggal Pembayaran</th>
                                <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mutasi.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="px-4 py-2">{item.jenis}</td>
                                    <td className="px-4 py-2">{item.nominal}</td>
                                    <td className="px-4 py-2">{item.tanggal}</td>
                                    <td className="px-4 py-2">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default cekMutasi;