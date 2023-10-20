import { ComponentProps, FC } from "react";
import styled from "styled-components";

interface IGalleryProps extends ComponentProps<"svg"> {}

export const Gallery: FC<IGalleryProps> = (props) => {
  return (
    <svg
      fill="#ffffff"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      version="1.1"
      stroke="#000000"
      stroke-width="0.00064"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="grid"></g> <g id="Layer_2"></g> <g id="Layer_3"></g>{" "}
        <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g>{" "}
        <g id="Layer_7"></g> <g id="Layer_8"></g> <g id="Layer_9"></g>{" "}
        <g id="Layer_10">
          <g>
            <path d="M48.68,58.259H4.174V16.89H48.68V58.259z M6.174,56.259H46.68V18.89H6.174V56.259z"></path>{" "}
          </g>
          <g>
            <polygon points="5.011,42.688 4.29,40.822 23.156,33.525 34.12,38.745 41.335,35.753 48.224,40.22 47.136,41.897 41.13,38.003 34.063,40.933 23.074,35.701 "></polygon>{" "}
          </g>
          <g>
            <path d="M13.535,30.313c-1.97,0-3.572-1.602-3.572-3.571c0-1.969,1.603-3.57,3.572-3.57s3.572,1.602,3.572,3.57 C17.107,28.71,15.505,30.313,13.535,30.313z M13.535,25.171c-0.867,0-1.572,0.705-1.572,1.57c0,0.866,0.705,1.571,1.572,1.571 s1.572-0.705,1.572-1.571C15.107,25.875,14.402,25.171,13.535,25.171z"></path>{" "}
          </g>
          <g>
            <polygon points="54.252,50.291 52.252,50.291 52.252,13.315 10.748,13.315 10.748,11.315 54.252,11.315 "></polygon>{" "}
          </g>
          <g>
            <polygon points="59.826,44.717 57.826,44.717 57.826,7.741 16.322,7.741 16.322,5.741 59.826,5.741 "></polygon>{" "}
          </g>
        </g>
        <g id="Layer_37"></g> <g id="Layer_11"></g> <g id="Layer_12"></g>
        <g id="Layer_13"></g> <g id="Layer_14"></g> <g id="Layer_16"></g>
        <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g>
        <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g>
        <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g>
      </g>
    </svg>
  );
};

export const StyledGallery = styled(Gallery)`
  width: 36px;
  height: 36px;
`;
