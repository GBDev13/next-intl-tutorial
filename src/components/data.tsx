import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "BenefitOneTitle",
  desc: "BenefitOneSubtitle",
  image: benefitOneImg,
  bullets: [
    {
      title: "UnderstandCustomers",
      desc: "UnderstandCustomersDescription",
      icon: <FaceSmileIcon />,
    },
    {
      title: "ImproveAcquisition",
      desc: "ImproveAcquisitionDescription",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "DriveCustomerRetention",
      desc: "DriveCustomerRetentionDescription",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "BenefitTwoTitle",
  desc: "BenefitTwoSubtitle",
  image: benefitTwoImg,
  bullets: [
    {
      title: "MobileResponsiveTemplate",
      desc: "MobileResponsiveTemplateDescription",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "PoweredByNextJSAndTailwindCSS",
      desc: "PoweredByNextJSAndTailwindCSSDescription",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "DarkAndLightMode",
      desc: "DarkAndLightModeDescription",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
