import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const links = [
    {
      name: "facebook",
      href: "facebook.com",
      id: 1,
    },
    {
      name: "twitter",
      href: "twitter.com",
      id: 2,
    },
    {
      name: "instagram",
      href: "instagram.com",
      id: 3,
    },
    {
      name: "pinterest",
      href: "pinterest.com",
      id: 4,
    },
  ];

  const infos = [
    { name: "cookies settings", id: 1 },
    { name: "privacy policy", id: 2 },
    { name: "returns", id: 3 },
    { name: "store", id: 4 },
  ];

  return (
    <Container className="py-5 px-2 d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column gap-5 justify-content-center text-center">
        <h1>JOIN OUR NEWSLETTER</h1>
        <div className="d-dm-flex gap-4 justify-content-center align-items-center">
          {links.map((item) => (
            <a href={`${item.href}`} target="_blank" rel='noreferrer' key={item.id}>
              <p className="text-uppercase font-normal text-sm text-black-50">
                {item.name}
              </p>
            </a>
          ))}
        </div>
        <div className="d-md-flex justify-content-center align-items-center gap-4">
          {infos.map((it) => (
            <p className="uppercase front-normal text-xs mx-2" key={it.id}>
              {it.name}|
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Footer;
