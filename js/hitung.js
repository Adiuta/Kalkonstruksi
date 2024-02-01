document.addEventListener("DOMContentLoaded", function () {
  const hitungButton = document.getElementById("hitungButton");

  hitungButton.addEventListener("click", function () {
    const itemSelect = document.getElementById("mainDropdown");
    const subItemSelect = document.getElementById("subDropdown");
    const volumeInput = document.getElementById("volume");

    const item = itemSelect.value;
    const subItem = subItemSelect.value;
    const volume = parseFloat(volumeInput.value);

    if (isNaN(volume)) {
      alert("Harap masukkan angka yang valid.");
      return;
    }

    const materialOptions = {
      //pekerjaan tanah
      Tanah: {
        UrugPasir: { 
          materials: ["Pasir Urug"],
          rasioBahan: [1.2]
        },
        UrugSirtu: { 
          materials: ["Sirtu"],
          rasioBahan: [1.2]
        },
        UrugTanah: { 
          materials: ["Tanah Urug"], 
          rasioBahan: [1.2]
        },
      },

      //Pekerjaan Pondasi
      Pondasi: {
        Kosong: {
          materials: ["Batu Kali", "Pasir Pasang"],
          rasioBahan: [1.2, 0.432],
        },
        batu3: {
          materials: ["Batu Kali", "Semen", "Pasir Pasang"],
          rasioBahan: [1.2, 202, 0.485],
        },
        batu4: {
          materials: ["Batu Kali", "Semen", "Pasir Pasang"],
          rasioBahan: [1.2, 163, 0.52],
        },
        batu5: {
          materials: ["Batu Kali", "Semen", "Pasir Pasang"],
          rasioBahan: [1.2, 136, 0.544],
        },
        batu6: {
          materials: ["Batu Kali", "Semen", "Pasir Pasang"],
          rasioBahan: [1.2, 117, 0.561],
        },
        batu8: {
          materials: ["Batu Kali", "Semen", "Pasir Pasang"],
          rasioBahan: [1.2, 91, 0.584],
        },

      },

        //pekerjaan beton//
        Beton: { 
        mpa1: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [200, 0.522, 0.862],
        },
        mpa7: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [247, 0.62, 0.555],
        },
        mpa9: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [276, 0.59, 0.56],
        },
        mpa12: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [299, 0.57, 0.565],
        },
        mpa14: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [326, 0.5428, 0.5717],
        },
        mpa16: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [352, 0.522, 0.5728],
        },
        mpa19: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [371, 0.4986, 0.5817],
        },
        mpa21: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [384, 0.4943, 0.5772],
        },
        mpa24: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [406, 0.4886, 0.57],
        },
        mpa26: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [413, 0.4864, 0.5672],
        },
        mpa28: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [439, 0.4864, 0.5672],
        },
        mpa31: {
          materials: ["Semen", "Pasir Beton", "Kerikil"],
          rasioBahan: [488, 0.4764, 0.5556],
        },

        //pekerjaan bekisting//
        bkstpondasi: {
          materials: ["Kayu Kelas III", "Paku 5 - 10 cm", "Minyak bekisting"],
          rasioBahan: [0.04, 0.3, 0.1],
        },
        bkstsloof: {
          materials: ["Kayu Kelas III", "Paku 5 - 10 cm", "Minyak bekisting"],
          rasioBahan: [0.045, 0.3, 0.1],
        },
        bkstkolom: {
          materials: [
            "Kayu Kelas III",
            "Paku 5 - 10 cm",
            "Plywood 9mm",
            "Bambu panjang 4m",
          ],
          rasioBahan: [0.04, 0.4, 0.2, 0.35, 2],
        },
        bkstbalok: {
          materials: [
            "Kayu Kelas III",
            "Paku 5 - 12 cm",
            "Minyak bekisting",
            "Plywood 9mm",
            "Bambu panjang 4m",
          ],
          rasioBahan: [0.04, 0.4, 0.2, 0.35, 2],
        },
        bkstlantai: {
          materials: [
            "Kayu Kelas III",
            "Paku 5 - 10 cm",
            "Plywood 9mm",
            "Bambu panjang 4m",
          ],
          rasioBahan: [0.04, 0.4, 0.2, 0.35, 4],
        },
        bkstdinding: {
          materials: [
            "Kayu Kelas III",
            "Paku 5 - 10 cm",
            "Plywood 9mm",
            "Bambu panjang 4m",
          ],
          rasioBahan: [0.03, 0.4, 0.15, 0.35, 4],
        },
        bksttangga: {
          materials: [
            "Kayu Kelas III",
            "Paku 5 - 10 cm",
            "Plywood 9mm",
            "Bambu panjang 4m",
          ],
          rasioBahan: [0.03, 0.4, 0.15, 0.35, 2],
        },

        //pekerjaan besi belum fix//
        besipolos: {
          materials: ["Besi polos", "Kawat beton"],
          rasioBahan: [1.05, 0.015],
        },
        besiulir: {
          materials: ["Besi ulir", "Kawat beton"],
          rasioBahan: [1.05, 0.015],
        },
        wiremesh: {
          materials: ["Wiremesh"],
          rasioBahan: [1.05],
        },
      },

        //pekerjaan Dinding belum lengkap//
        Dinding:{
        bata2: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [140, 43.5, 0.08],
        },
        bata3: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [140, 32.95, 0.091],
        },
        bata4: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [140, 26.55, 0.093],
        },
        bata5: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [140, 22.2, 0.102],
        },
        bata6: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [140, 18.5, 0.122],
        },
        setbata2: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [70, 18.95, 0.038],
        },
        setbata3: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [70, 14.37, 0.04],
        },
        setbata4: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [70, 11.5, 0.043],
        },
        setbata5: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [70, 9.68, 0.045],
        },
        setbata6: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [70, 8.32, 0.049],
        },
        setbata8: {
          materials: ["Bata Merah", "Semen", "Pasir Pasang"],
          rasioBahan: [70, 6.5, 0.05],
        },
        batako6: {
          materials: ["Batako", "Semen", "Pasir Pasang"],
          rasioBahan: [12.5, 7.58, 0.027],
        },
      },

        //pekerjaan Plesteran//
        Plesteran:{
        plester2: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [10.224, 0.02],
        },
        plester4: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [6.24, 0.024],
        },
        plester5: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [5.184, 0.026],
        },
        plester6: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [4.416, 0.027],
        },
        plester8: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [3.456, 0.029],
        },
        ciptat2: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [4.32, 0.006],
        },
        siarbata: {
          materials: ["Semen"],
          rasioBahan: [3.108],
        },
        siarbatu2: {
          materials: ["Semen", "Pasir Pasang"],
          rasioBahan: [6.34, 0.012],
        },
        aciansemen: {
          materials: ["Semen"],
          rasioBahan: [3.25],
        },
        acianmill: {
          materials: ["Semen", "Mill"],
          rasioBahan: [1, 1],
        },
        plespepalihan: {
          materials: ["Semen", "Pasir Pasang", "Paku 5 - 12 cm", "Bekisting"],
          rasioBahan: [10.224, 0.02, 0.2, 0.006],
        },
      },
  
      //Pekerjaan Pintu dan Jendela//
      PintuJendela: {
        kusen: {
          materials: ["Kayu balok 8/12", "Paku 10 cm", "Lem Kayu"],
          rasioBahan: [1.2, 1.25, 1],
        },
        rangka: {
          materials: ["Kayu Papan 3/20", "Lem Kayu"],
          rasioBahan: [0.24, 0.3],
        },
        klamp: {
          materials: ["Kayu Papan 3/20", "Paku 5 - 7 cm"],
          rasioBahan: [0.4, 0.05],
        },
        panel: {
          materials: ["Kayu Papan 3/20", "Lem Kayu"],
          rasioBahan: [0.4, 0.5],
        },
        pintuply: {
          materials: [
            "Kayu  kamper papan 3/20",
            "Paku 1-2,5 cm",
            "Lem kayu",
            "Plywood 4 mm ( 90x220 )",
          ],
          rasioBahan: [0.025, 0.03, 0.5, 1.0],
        },
        jalusi: {
          materials: ["Kayu Papan 3/20", "Lem Kayu"],
          rasioBahan: [0.064, 0.5],
        },
        ramp: {
          materials: ["Kayu Papan", "Paku 1-2,5 cm"],
          rasioBahan: [0.018, 0.5],
        },
      },

      //Pekerjaan Aksesoris Pintu Jendela//
        AksesorisPintuJendela: {
          Kunci: {
            materials: ["Kunci"],
            rasioBahan: [1],
          },
        },
  
        //Pasangan keramik//
        Keramik:{
        keramik20: {
          materials: ["Keramik 20x20 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [26.5, 10.4, 0.045, 0.5],
        },
        keramik30: {
          materials: ["Keramik 30x30 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [11.87, 10, 0.045, 0.5],
        },
        keramik40: {
          materials: ["Keramik 40x40 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [6.63, 9.8, 0.045, 1.3],
        },
        dinding40: {
          materials: ["Keramik 25x40 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [1.05, 9.3, 0.018, 1.94],
        },
        plint20: {
          materials: ["Keramik 10x20 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [5.3, 1.14, 0.003, 0.025],
        },
        plint30: {
          materials: ["Keramik 10x30 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [3.53, 1.14, 0.003, 0.1],
        },
        plint40: {
          materials: ["Keramik 10x40 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [2.65, 1.14, 0.003, 0.1],
        },
        granit60: {
          materials: ["Granit 60x60 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [2.7777, 9.8, 0.045, 1.3],
        },
        plint60: {
          materials: ["Granit 10x60 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [1.7, 1.14, 0.003, 0.1],
        },
        marmer100: {
          materials: ["Marmer 10x60 cm", "Semen", "Pasir Pasang", "Semen Warna"],
          rasioBahan: [1.06, 8.19, 0.045, 0.134],
        },
        dinding100: {
          materials: [
            "Marmer 10x60 cm",
            "Semen",
            "Pasir Pasang",
            "Paku 12 cm",
            "Semen Warna",
          ],
          rasioBahan: [1.06, 12.44, 0.025, 3.03, 0.65],
        },
      },

       //Pekerjaan Rangka Atap//
        RangkaAtap: {
        c75: {
         materials: ["Main Trus C75-0.75", "Reng AA 0,45", "Skrup SDS 8 x 16", "Dynabol 10 x 65"],
         rasioBahan: [3.72, 7.7727, 12.7273, 27.2727, 0.5455],
        },
        kuda: {
          materials: ["Kayu  kruing balok 8/12", "Besi strip", "Paku 12 cm"],
          rasioBahan: [1.1, 15, 5.6],
        },
        usuk: {
          materials: ["Usuk kayu 5x7", "Paku 7 - 10 cm"],
          rasioBahan: [0.014, 0.125],
        },
        reng: {
          materials: ["Reng kayu 2x3", "Paku 5 - 7 cm"],
          rasioBahan: [0.0036, 0.125],
        },
        listplank310: {
          materials: ["Papan kayu 3x10", "Paku 5 - 7 cm"],
          rasioBahan: [0.0054, 0.05],
        },
        listplank320: {
          materials: ["Papan kayu 3x20", "Paku 5 - 7 cm"],
          rasioBahan: [0.0108, 0.1],
        },
        listplank330: {
          materials: ["Papan kayu 3x20", "Paku 5 - 7 cm"],
          rasioBahan: [0.011, 0.05],
        },
      },

        //Pekerjaan Penutup Atap//
        Atap: {
        plentong: {
          materials: ["Genteng Plentong"],
          rasioBahan: [25],
        },
        kodok: {
          materials: ["Genteng Kodok"],
          rasioBahan: [25],
        },
        glazur: {
          materials: ["Genteng Kodok Glazur"],
          rasioBahan: [25],
        },
        beton: {
          materials: ["Genteng Beton", "Paku 5 - 12 cm"],
          rasioBahan: [11, 0.03],
        },
        metalp: {
          materials: ["Genteng Metal 80 x 100 cm", "Paku Sekrup"],
          rasioBahan: [1.3, 0.2],
        },
        metalj: {
          materials: ["Genteng Metal 80 x 100 cm", "Paku Sekrup"],
          rasioBahan: [2, 0.2],
        },
        bubunganplentong: {
          materials: ["Genteng Bubungan Plentong", "Semen", "Pasir Pasang"],
          rasioBahan: [5, 8, 0.032],
        },
      },

      
        //Pekerjaan Rangka Plafond//
        Plafond:{
          rangka60: {
            materials: ["Kayu  Kruing  usuk 5x7", "Paku 5 - 10 cm"],
            rasioBahan: [0.0163, 0.25],
          },

          //Pekerjaan Plafond//
          tripleks: {
            materials: ["Plywood 120x240 cm", "Paku 2 cm"],
            rasioBahan: [0.36, 0.03],
          },
          calsiboard: {
            materials: ["Calsiboard 120x240 cm", "Paku Sekrup"],
            rasioBahan: [0.364, 0.11],
          },
          gypsum: {
            materials: ["Gypsum Board 120x240 cm", "Paku Sekrup"],
            rasioBahan: [0.364, 0.11],
          },
          gedeg: {
            materials: ["Gedeg", "Paku 5 cm"],
            rasioBahan: [1.1, 0.2],
          },
          lambriziring: {
            materials: ["Kayu Papan", "Paku 5 cm"],
            rasioBahan: [0.015, 0.1],
          },
          liskayu15: {
            materials: ["List Kayu Profil 1/5 cm", "Paku 5 cm"],
            rasioBahan: [1.05, 0.01],
          },
          liskayu35: {
            materials: ["List Kayu Profil 3/5 cm", "Paku 5 cm"],
            rasioBahan: [1.05, 0.01],
          },
          lisgypdatar: {
            materials: ["List Gypsum Datar", "Lem"],
            rasioBahan: [1.05, 0.25],
          },
          lisgypsiku: {
            materials: ["List Gypsum Siku", "Lem"], //revisi lem//
            rasioBahan: [1.05, 0.25],
          },
        },
  

        //Pekerjaan Pengecatan//
        Pengecatan: {
        catdindingbaru: {
          materials: ["Plamir", "Cat Tembok Dasar", "Cat Tembok"],
          rasioBahan: [0.1, 0.1, 0.26],
        },
        catdindinglama: {
          materials: ["Cat Tembok Dasar", "Cat Tembok"],
          rasioBahan: [0.12, 0.18],
        },
        catkayubaru: {
          materials: ["Cat meni", "Dempul", "Cat Kayu Dasar", "Cat Kayu", "Kuas", "Pengencer", "Ampelas"],
          rasioBahan: [0.2000, 0.1500, 0.1700, 0.2600, 0.0100, 0.0300, 0.2000],
        },  
        catkayulama: {
          materials: ["Cat Kayu", "Kuas", "Pengencer", "Ampelas"],
          rasioBahan: [0.2600, 0.0100, 0.0300, 0.2000],
        },
        polituran: {
          materials: ["Politur", "Ampelas"],
          rasioBahan: [0.522, 2],
        },
      },

        //Pekerjaan Listrik//
        Listrik: {
        MCB: {
          materials: ["MCB 6 A","Kabel NYM 3x2.5 mm2", "Pipa listrik 20 mm", "Sock Ø 20 mm" , "Tee dos clipsal 20 mm", "Klem 19 mm", "Outbow dos", "Isolasi"],
          rasioBahan: [1, 15, 15, 3, 1, 24, 2, 0.1],
        },

        instalasilampu: {
          materials: ["Kabel NYM 2x2.5 mm2", "Pipa listrik 20 mm", "Sock Ø 20 mm" , "Tee dos clipsal 20 mm", "Klem 19 mm", "Outbow dos", "Isolasi"],
          rasioBahan: [9, 9, 2, 1, 12, 1, 0.1],
        },

        instalasistopkontak: {
          materials: ["Kabel NYM 3x2.5 mm2", "Pipa listrik 20 mm", "Sock Ø 20 mm" , "Tee dos clipsal 20 mm", "Klem 19 mm", "Outbow dos", "Isolasi"],
          rasioBahan: [10, 10, 2, 1, 12, 1, 0.1],
        },
        saklartunggal: {
          materials: ["Saklar Tunggal", "Outbow dos", "Isolasi"],
          rasioBahan: [1, 1, 0.25],
        },
        saklardobel: {
          materials: ["Saklar Ganda", "Outbow dos", "Isolasi"],
          rasioBahan: [1, 1, 0.25],
        },
        stopkontak: {
          materials: ["Stop Kontak", "Outbow dos", "Isolasi"],
          rasioBahan: [1, 1, 0.25],
        },
        LampuSL18: {
          materials: ["Lampu SL 18 Watt", "Fitting Kotak", "Isolasi"],
          rasioBahan: [1, 1, 0.25],
        },

      },

        //Pekerjaan Style Bali//
        StyleBali: {
        BatuTabas: {
          materials: ["Batu hitam karangasem" ,"Semen"],
          rasioBahan: [1.1, 11.75],
        },
      },

        //Pekerjaan  Pipa//
        Pipa: {
        pipaaw05: {
          materials: ["Pipa PVC Tipe AW Ø 0,5",],
          rasioBahan: [1.2],
        },
      },

    };

    const jumlahBahan = [];
    const satuanBahan = materialOptions[item][subItem].satuan || "M³";

    for (let i = 0; i < materialOptions[item][subItem].materials.length; i++) {
      jumlahBahan.push(volume * materialOptions[item][subItem].rasioBahan[i]);
    }

    const hasilElemen = document.getElementById("hasil");
    hasilElemen.innerHTML = "";

    const tabelHasil = document.createElement("table");
    tabelHasil.innerHTML = `
      <tr>
        <th>Material</th>
        <th>Jumlah</th>
        <th>Satuan</th>
      </tr>
    `;

    const materials = materialOptions[item][subItem].materials;
    for (let i = 0; i < materials.length; i++) {
      const row = document.createElement("tr");
      const materialCell = document.createElement("td");
      const jumlahCell = document.createElement("td");
      const satuanCell = document.createElement("td");
      materialCell.textContent = materials[i];
      jumlahCell.textContent = `${jumlahBahan[i].toFixed(2)}`;

      switch (materials[i]) {
      //Satuan Kg
        case "Semen":
        case "Paku 5 - 10 cm":
        case "Paku 7 - 10 cm":
        case "Paku 5 - 12 cm":
        case "Paku 2 cm":
        case "Paku 5 cm":
        case "Paku 1-2,5 cm":
        case "Paku 5 - 7 cm":
        case "Paku 10 cm":
        case "Paku 12 cm":
        case "Paku Sekrup":
        case "Besi polos":
        case "Lem Kayu":
        case "Besi ulir":
        case "Wiremesh":
        case "Kawat beton":
        case "Mill":
        case "Plamir":
        case "Cat Tembok Dasar":
        case "Cat Tembok":
        case "Cat meni":
        case "Dempul":
        case "Cat Kayu Dasar":
        case "Cat Kayu":
        case "Pengencer":
        case "Semen Warna":
        case "Baja Profil IWF":
        case "Besi strip":
          satuanCell.textContent = "Kg";
          break;

      //Satuan M'
        case "List Gypsum Datar":
        case "List Gypsum Siku":
        case "List Kayu Profil 1/5 cm":
        case "List Kayu Profil 3/5 cm":
        case "Main Trus C75-0.75":
        case "Reng AA 0,45":
        case "Pipa PVC Tipe AW Ø 0,5":
        case "Kabel NYM 2x2.5 mm2":
        case "Kabel NYM 3x2.5 mm2":
        case "Pipa listrik 20 mm":
          satuanCell.textContent = "M'";
          break;

      //Satuan M²
        case "Gedeg":
        case "Batu hitam karangasem":
          satuanCell.textContent = "M²";
          break;

      //Satuan Liter
        case "Minyak bekisting":
        case "Lem":
        case "Politur":
          satuanCell.textContent = "Liter";
          break;

      //Satuan Lembar     
        case "Plywood 9mm":
        case "Plywood 120x240 cm":
        case "Calsiboard 120x240 cm":
        case "Gypsum Board 120x240 cm":
        case "Ampelas":
          satuanCell.textContent = "Lembar";
          break;

      //Satuan Batang      
        case "Bambu panjang 4m":
          satuanCell.textContent = "Batang";
          break;
           
      //Satuan doos      
      case "Keramik 25x40 cm":
        satuanCell.textContent = "doos";
        break;
          

      //Satuan Bh
        case "Skrup SDS 8 x 16":
        case "Skrup SDS 12 x 20":
        case "Dynabol 10 x 65":
        case "Bata Merah":
        case "Batako":
        case "Keramik 20x20 cm":
        case "Keramik 30x30 cm":
        case "Keramik 40x40 cm":
        case "Keramik 10x20 cm":
        case "Keramik 10x30 cm":
        case "Keramik 10x40 cm":
        case "Granit 60x60 cm":
        case "Granit 10x60 cm":
        case "Marmer 100x100 cm":
        case "Genteng Plentong":
        case "Genteng Kodok":
        case "Genteng Kodok Glazur":
        case "Genteng Beton":
        case "Genteng Metal 80 x 100 cm":
        case "Genteng Bubungan Plentong":
        case "Tee dos clipsal 20 mm":
        case "Klem 19 mm":
        case "Outbow dos":
        case "Sock Ø 20 mm":
        case "Isolasi":
        case "Saklar Tunggal":
        case "Saklar Ganda":
        case "Stop Kontak":
        case "MCB 6 A":
        case "Lampu SL 18 Watt":
        case "Fitting Kotak":
        case "Kuas":
          satuanCell.textContent = "Bh";
          break;

        default:
          satuanCell.textContent = satuanBahan;
      }

      row.appendChild(materialCell);
      row.appendChild(jumlahCell);
      row.appendChild(satuanCell);
      tabelHasil.appendChild(row);
    }

    hasilElemen.appendChild(tabelHasil);
  });
});
