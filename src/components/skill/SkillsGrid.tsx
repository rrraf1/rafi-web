import React, { useState } from "react";
import { Grid, Dialog, DialogTitle, DialogContent } from "@mui/material";
import LazySkillCard from "./LazySkillCard";

import css from "@assets/css.svg";
import express from "@assets/express.svg";
import html from "@assets/html.svg";
import js from "@assets/js.svg";
import node from "@assets/node.svg";
import python from "@assets/python.svg";
import scss from "@assets/scss.svg";
import vue from "@assets/vue.svg";
import react from "@assets/react.svg";
import mysql from "@assets/mysql.svg";
import pgsql from "@assets/pgsql.svg";
import go from "@assets/go.svg";
const images = [
  go,
  css,
  html,
  js,
  node,
  // python,
  scss,
  vue,
  react,
  express,
  mysql,
  pgsql,
];

const skillDescriptions = [
  "Saya mampu menggunakan Go untuk membangun backend yang cepat, efisien, dan scalable. Saya dapat mengembangkan API RESTful menggunakan framework Fiber, yang memungkinkan pembuatan layanan web dengan performa tinggi dan mudah dikelola. Selain itu, saya berpengalaman dalam mengintegrasikan Go dengan berbagai database, membangun microservices, dan mengimplementasikan middleware untuk logging, autentikasi, dan otorisasi.",
  "Saya dapat membuat tata letak yang responsif, menerapkan tren desain modern, dan menggunakan fitur-fitur canggih seperti flexbox dan grid. Saya mahir dalam membuat animasi, transisi, dan menerapkan gaya yang kompatibel dengan lintas browser.",
  "Saya terampil dalam menulis HTML5 semantik, membuat halaman web yang dapat diakses, dan menyusun konten secara efektif. Saya dapat bekerja dengan formulir, elemen multimedia, dan menerapkan praktik terbaik SEO.",
  "Saya berpengalaman dalam pengembangan JavaScript frontend dan backend. Saya dapat membuat antarmuka pengguna yang interaktif dan menangani operasi asinkron.",
  "Saya dapat membangun aplikasi sisi server yang dapat diskalakan menggunakan Node.js. Saya bisa membuat RESTful API dan mengintegrasikan dengan database.",
  "Saya dapat memanfaatkan SCSS untuk menulis CSS yang lebih mudah dikelola dan terorganisir. Saya dapat menggunakan variabel, mixins, dan nesting untuk membuat stylesheet yang efisien dan merampingkan proses pengembangan.",
  "Saya dapat membuat aplikasi halaman tunggal yang dinamis menggunakan Vue.js. Saya berpengalaman dengan sistem komponen Vue dan perutean dengan Vue Router. Saya juga dapat mengintegrasikan Vue dengan library dan API lain.",
  "Saya mahir dalam mengembangkan antarmuka pengguna yang kompleks dengan React. Saya dapat bekerja dengan hooks dan Redux untuk manajemen state. Saya juga berpengalaman dalam membuat komponen yang dapat digunakan kembali dan meng  optimalkan kinerja.",
  "Saya dapat membuat aplikasi backend yang kuat menggunakan Express.js. Saya terbiasa dalam menyiapkan middleware, menangani rute, dan mengintegrasikan dengan database.",
  "Saya berpengalaman dalam merancang dan mengoptimalkan basis data relasional menggunakan MySQL. Saya dapat menulis query yang kompleks, membuat prosedur tersimpan, dan mengimplementasikan teknik normalisasi database.",
  "Saya mahir bekerja dengan PostgreSQL untuk manajemen database relasional tingkat lanjut. Saya dapat menangani tipe data yang kompleks, menerapkan strategi pengindeksan, dan menggunakan fitur khusus PostgreSQL seperti dukungan JSON dan pencarian teks lengkap.",
];

const SkillsGrid: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({
    image: "",
    description: "",
  });

  const handleClickOpen = (image: string, description: string) => {
    setSelectedSkill({ image, description });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        width={"85%"}
        justifyContent="center"
        className="skills-grid"
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LazySkillCard
              image={image}
              onClick={() => handleClickOpen(image, skillDescriptions[index])}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Informasi Skill</DialogTitle>
        <DialogContent>
          <p>{selectedSkill.description}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SkillsGrid;
