import { Grid } from "@mui/material";

type SectionKey = "about" | "skills" | "experience" | "contact";

function Navbar() {
  const sectionPositions: Record<SectionKey, number> = {
    about: 100,
    skills: 215,
    experience: 315 ,
    contact: 400,
  };

  const handleScroll = (section: SectionKey) => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = sectionPositions[section] * (viewportHeight / 100);

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="nav-container">
      <Grid container justifyContent="end">
        <Grid item>
            <ul className="nav__list">
              <li className="nav__item" onClick={() => handleScroll("about")}>
                About
              </li>
              <li className="nav__item" onClick={() => handleScroll("skills")}>
                Skills
              </li>
              <li
                className="nav__item"
                onClick={() => handleScroll("experience")}
              >
                Experience
              </li>
              <li className="nav__item" onClick={() => handleScroll("contact")}>
                Contact
              </li>
            </ul>
        </Grid>
      </Grid>
    </nav>
  );
}

export default Navbar;
