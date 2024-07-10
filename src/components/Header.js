import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    id: "malito",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    id: "github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    id: "linkedin",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    id: "medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    id: "stackoverflow",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = headerRef.current;
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        headerElement.style.transform = "translateY(-200px)";
      } else {
        headerElement.style.transform = "translateY(0)";
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map(({ icon, url, id }) => {
              return (
                <a
                  key={id}
                  href={url}
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                >
                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
