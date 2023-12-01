/*eslint-disable*/

import { CenterFocusStrong } from "@mui/icons-material";
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/images/certificados/policy.png"),
    altText: "PolicyCenter Specialist"
  },
  {
    src: require("assets/images/certificados/azure cloud.png"),
    altText: "Azure cloud"
  },
  {
    src: require("assets/images/certificados/azure az104.png"),
    altText: "Azure AZ104"
  },
  {
    src: require("assets/images/certificados/azure az305.png"),
    altText: "Azure AZ305"
  },
  {
    src: require("assets/images/certificados/azure fundamentals.png"),
    altText: "Azure Fundamentals"
  },
  {
    src: require("assets/images/certificados/meta-data analytics.png"),
    altText: "Meta Analytics",
  },
  {
    src: require("assets/images/certificados/michigan-developing ar.png"),
    altText: "Developing AR"
  },
  {
    src: require("assets/images/certificados/uc davis spark sql.png"),
    altText: "Spark SQL"
  },
  {
    src: require("assets/images/certificados/uc davis sql.png"),
    altText: "SQL"
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel"sx={{ boxShadow : "none"}}>
        <Container sx={{ boxShadow : "none"}}>
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} style={{
                          width : "100%",
                          height: "100%",
                          maxWidth: "450px",
                          maxHeight: "270px",
                          backgroundPosition: "center",
                          content : "flex",
                        }} />
                         <CarouselCaption className="text-warning" captionHeader={item.caption} />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
