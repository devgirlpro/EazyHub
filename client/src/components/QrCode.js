////////////////////////////////////////////////////////////////////////////////////
import React, { Component, useState, useEffect } from "react";
import QrReader from 'react-qr-reader'

export default function QrCode() {
    const [result, useResult] = useState("");


 const HandleScan = data => {
        useResult(data)
  }

 const handleError = err => {
        console.error(err)
      }


    //   useEffect(() => {
    //     handleScan()
    //   }, []);

  return (
    <>
        <section className="qrcode">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={HandleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
      </section>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">he</button>
    </>
  );
}
