import React, { Component, useState, useEffect, useContext } from "react";
import QrReader from 'react-qr-reader'
import { AuthContext } from "../context/auth";
import axios from "axios";

export default function QrCode() {
    const [result, useResult] = useState("");


 const HandleScan = data => {
        useResult(data)
console.log(data)
        if (data !== null) {
        axios
      .post(`http://localhost:5005/api/employees/${user._id}/vehicle`, { vehicle:data})
    }
  }

 const handleError = err => {
        console.error(err)
      }


    //   useEffect(() => {
    //     handleScan()
    //   }, []);
    const { user } = useContext(AuthContext);

  return (
    <>
        <section className="qrcode">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={HandleScan}
          style={{ width: '150%' }}
        />
        <p>{result}</p>
      </section>
      
      
      

      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">he</button> */}
    </>
  );
}
