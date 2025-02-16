import { useState } from "react";

export default function useBarcodeScanner(setForm) {
    const [scanning, setScanning] = useState(false);

    const handleBarCodeScanned = ({ data }) => {
        setScanning(false);
        setForm((prevForm) => ({ ...prevForm, barCode: data }));
    };

    return { scanning, setScanning, handleBarCodeScanned };
}