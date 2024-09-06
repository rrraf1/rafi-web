// experienceData.ts
import orbit1 from "../assets/orbit.png";
import orbit2 from "../assets/orbit-2.png";
import orbit3 from "../assets/orbit-3.png";
import orbit4 from "../assets/orbit-4.png";
import absensi1 from "../assets/absensi.png";
import absensi2 from "../assets/absensi2.png";
import absensi3 from "../assets/absensi3.png";
import absensi4 from "../assets/absensi4.png";
import eraTunes1 from "../assets/era-tunes.png"
import eraTunes2 from "../assets/era-tunes-2.png"
import eraTunes3 from "../assets/era-tunes-3.png"
import eraTunes4 from "../assets/era-tunes-4.png"

interface DataItem {
  images: string[];
  text: {
    title: string;
    description: string;
    techstack: string[];
    role: string;
  };
}

const data: { [key: string]: DataItem } = {
  orbit: {
    images: [orbit1, orbit2, orbit3, orbit4],
    text: {
      title: "Orbit - IT Extracurricular",
      description:
      "ORBIT adalah singkatan dari Organization of Basic Information Technology, dimana ORBIT merupakan sebuah ekstrakurikuler yang fokus bergerak di bidang IT. Orbit merupakan sebuah wadah yang menampung siswa yang ingin mengembangkan bakatnya, terutama dalam bidang IT.",
      techstack: ["ReactJS", "NextJS", "TailwindCSS", "GraphQL", "Python"],
      role: "Project Manager",
    },
  },
  absensi: {
    images: [absensi1, absensi2, absensi3, absensi4],
    text: {
      title: "Absensi SMKN 4 Bandung",
      description:
      "Absensi SMKN 4 Bandung merupakan hasil dari kerjasama antara Pt.Curaweda bersama SMKN 4 bandung. Dimana projek ini diserahkan kepada muridnya untuk mengembangkannya. Fungsi dari website ini yaitu untuk mengganti sistem presensi dengan website, dimana ada fitur utamanya yaitu face detector yang bisa mendeteksi muka para murid-muridnya",
      techstack: ["Vue JS", "Scss", "Express JS", "Python"],
      role: "Fullstack Developer",
    },
  },
  eraTunes: {
    images: [eraTunes1, eraTunes2, eraTunes3, eraTunes4],
    text: {
      title: "EraTunes",
      description: "EraTunes adalah website dimana user bisa mendengarkan lagu hits dari berbagai dekade, cukup hanya dengan masuk menggunakan akun spotify mereka",
      techstack: ["React JS", "Spotify API", "Three js"],
      role: ""
    }
  }
};

export default data;
