import { Stack, Link } from "@mui/material";

export default function ContactPage() {
  return (
    <footer id="contact">
      <Stack
        direction="column"
        alignItems="flex-start"
        spacing={2}
        className="contact"
      >
        <div className="contact-header">
          <h3 className="contact-header__subtitle">
            <em>Itu saja</em>
          </h3>
          <h1 className="contact-header__title">
            Punya ide proyek? <br />
            Mari kita diskusikan
          </h1>
        </div>
        <Stack
          className="contact-details"
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 2, sm: 2, md: 10, lg: 25 }}
        >
          <Link
            className="contact-details__item"
            href="mailto:rafirizqullahramadhan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pos-el: <br />
            rafirizqullahramadhan@gmail.com
          </Link>
          <Link
            className="contact-details__item"
            href="https://wa.me/0838665011822"
            target="_blank"
            rel="noopener noreferrer"
            noWrap
          >
            Nomor telepon: <br />
            (+62) 838 6501 1822
          </Link>
          <Stack className="contact-details-container">
            Media Sosial: <br />
            <Stack direction="row" spacing={{ xs: 5, sm: 5, md: 2, lg: 2 }}>
              <a
                className="contact-details__item"
                href="https://github.com/rrraf1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="contact-details__item"
                href="https://instagram.com/_urafi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="contact-details__item"
                href="https://linkedin.com/rafi"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  );
}
