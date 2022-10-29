import React from "react";
import { Image,  ImageWrapper,  OurProgramsWrapper, IconWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function OurPrograms({img,name,alt,title,description,time,roomNumber}) {
  return (
    <OurProgramsWrapper>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>
    <div>
      
    <IconWrapper>
    <div>
    <FontAwesomeIcon size="xs" icon={faClock} />{time}
    </div>
    <div>
    <FontAwesomeIcon size="xs" icon={faMapMarkerAlt } />{roomNumber}
    </div>
    </IconWrapper>
    <h2>{title}</h2>
    <span> {name}</span>
    <p>{description}</p>
    </div>
    </OurProgramsWrapper>
    );
}
