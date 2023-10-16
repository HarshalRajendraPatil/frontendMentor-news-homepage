import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <NavPage open={open} />
      <Navbar open={open} setOpen={setOpen} />
      <GridContainer />
    </div>
  );
}

function NavPage({ open }) {
  return (
    <div className={`navPage ${open ? "" : "hidden"}`}>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}

function Button() {
  return <button className="btn">READ MORE</button>;
}

function Navbar({ setOpen, open }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
      </div>
      <NavbarItems />
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
}

function NavbarItems() {
  return (
    <div className="nav-item">
      <ul className="nav-item-ul">
        <li className="nav-item-li">Home</li>
        <li className="nav-item-li">New</li>
        <li className="nav-item-li">Popular</li>
        <li className="nav-item-li">Trending</li>
        <li className="nav-item-li">Categories</li>
      </ul>
    </div>
  );
}

function Hamburger({ setOpen, open }) {
  return (
    <div className="hamburger" onClick={() => setOpen((open) => !open)}>
      {open ? (
        <img src="icon-menu-close.svg" alt="menu" />
      ) : (
        <img src="icon-menu.svg" alt="menu" />
      )}
    </div>
  );
}

function GridContainer() {
  return (
    <div className="gridContainer">
      <Image />
      <BlackBox />
      <Bright />
      <ReadMore />
      <Container />
    </div>
  );
}

function Image() {
  return (
    <div className="item-1-image">
      <img className="img" src="image-web-3-desktop.jpg" alt="cover" />
    </div>
  );
}

function BlackBox() {
  return (
    <div className="item-2-black-box">
      <h1>New</h1>
      <BlackBoxItem
        title={"Hydrogen Vs Electric Car"}
        body={"Will hydrogen-fueled cars ever catch up to EV's?"}
      />
      <hr></hr>
      <BlackBoxItem
        title={"The Downside Of AI Artistry"}
        body={
          "What are the possible adverse effects of on-demand Al image generation?"
        }
      />
      <hr></hr>
      <BlackBoxItem
        title={"Is VC Funding Dying up?"}
        body={
          "Private funding by VC firms is down 50% YOY. We take a look at what that means"
        }
      />
    </div>
  );
}

function BlackBoxItem({ title, body }) {
  return (
    <div className="box-item">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function Bright() {
  return <h1 className="item-3-bright">The Bright Future Of Web 3.0?</h1>;
}

function ReadMore() {
  return (
    <div className="item-4-read-more">
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="item-5-container">
      <ContainerItem
        url={"image-retro-pcs.jpg"}
        num={"01"}
        heading={"Reviving Retro PC's"}
        description={"What happens when old PC's are given modern upgrages?"}
      />
      <ContainerItem
        url={"image-top-laptops.jpg"}
        num={"02"}
        heading={"Top 10 Laptops Of 2023"}
        description={"Our best picks for various needs and budgets"}
      />
      <ContainerItem
        url={"image-gaming-growth.jpg"}
        num={"03"}
        heading={"The Growth Of Gaming"}
        description={"How the pandemic has sparked fresh opportunities"}
      />
    </div>
  );
}

function ContainerItem({ num, heading, description, url }) {
  return (
    <div className="item">
      <div className="img-container">
        <img className="img" src={url} alt="computer" />
      </div>
      <div className="details">
        <h2>{num}</h2>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;
