import deskCreateAndShare from "../public/assets/home/desktop/create-and-share.jpg";
import tabletCreateAndShare from "../public/assets/home/tablet/create-and-share.jpg";
import mobileCreateAndShare from "../public/assets/home/mobile/create-and-share.jpg";

import deskBeautifulStories from "../public/assets/home/desktop/beautiful-stories.jpg";
import tabletBeautifulStories from "../public/assets/home/tablet/beautiful-stories.jpg";
import mobileBeautifulStories from "../public/assets/home/mobile/beautiful-stories.jpg";

import deskDesigned from "../public/assets/home/desktop/designed-for-everyone.jpg";
import tabletDesigned from "../public/assets/home/tablet/designed-for-everyone.jpg";
import mobileDesigned from "../public/assets/home/mobile/designed-for-everyone.jpg";

import mountains from "../public/assets/stories/desktop/mountains.jpg";
import mountainsMobile from "../public/assets/stories/mobile/mountains.jpg";

import cityscapes from "../public/assets/stories/desktop/cityscapes.jpg";
import cityscapesMobile from "../public/assets/stories/mobile/cityscapes.jpg";

import voyage from "../public/assets/stories/desktop/18-days-voyage.jpg";
import voyageMobile from "../public/assets/stories/mobile/18-days-voyage.jpg";

import architecturals from "../public/assets/stories/desktop/architecturals.jpg";
import architecturalsMobile from "../public/assets/stories/mobile/architecturals.jpg";

import responsive from "../public/assets/features/desktop/responsive.svg";
import noLimit from "../public/assets/features/desktop/no-limit.svg";
import embed from "../public/assets/features/desktop/embed.svg";

const homeMainElements = [
  {
    title: "Create and share your photo Stories.",
    description:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    id: "homeMainElements1",
    isMain: true,
    isReversed: false,
    btn: "Get an invite",
    img: {
      desktop: deskCreateAndShare,
      tablet: tabletCreateAndShare,
      mobile: mobileCreateAndShare,
    },
  },
  {
    title: "Beautiful stories every time",
    description:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    id: "homeMainElements2",
    isMain: false,
    isReversed: true,
    btn: "View the stories",
    img: {
      desktop: deskBeautifulStories,
      tablet: tabletBeautifulStories,
      mobile: mobileBeautifulStories,
    },
  },
  {
    title: "Designed for everyone",
    description:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
    id: "homeMainElements3",
    isMain: false,
    isReversed: false,
    btn: "View the stories",
    img: {
      desktop: deskDesigned,
      tablet: tabletDesigned,
      mobile: mobileDesigned,
    },
  },
];

const homeGalleryElements = [
  {
    title: "The Mountains",
    author: "John Appleseed",
    img: {
      desktop: mountains,
      mobile: mountainsMobile,
    },
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    img: {
      desktop: cityscapes,
      mobile: cityscapesMobile,
    },
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    img: {
      desktop: voyage,
      mobile: voyageMobile,
    },
  },
  {
    title: "Architecturals",
    author: "Samantha Brooke",
    img: {
      desktop: architecturals,
      mobile: architecturalsMobile,
    },
  },
];

const homeFeaturesElements = [
  {
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    image: responsive,
  },
  {
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: noLimit,
  },
  {
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    image: embed,
  },
];

export { homeMainElements, homeGalleryElements, homeFeaturesElements };
