import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelClassRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassRounded'
      short_name='HotelClass'

      {...props}
    >
      <path d="M11 12.775ZM6.05 21.05Q5.775 21.275 5.463 21.075Q5.15 20.875 5.275 20.525L7.15 14.4L2.275 10.9Q1.975 10.7 2.088 10.35Q2.2 10 2.55 10H8.6L10.525 3.6Q10.575 3.4 10.713 3.325Q10.85 3.25 11 3.25Q11.15 3.25 11.288 3.325Q11.425 3.4 11.475 3.6L13.4 10H19.45Q19.8 10 19.913 10.35Q20.025 10.7 19.725 10.9L14.85 14.4L16.725 20.525Q16.85 20.875 16.538 21.075Q16.225 21.275 15.95 21.05L11 17.3ZM8.6 16.65 11 14.8 13.4 16.65 12.5 13.6 14.75 12H11.95L11 8.9L10.05 12H7.25L9.5 13.6ZM20.1 21.05 18.625 19.925 17.15 15.2 20.25 13H22.125Q22.475 13 22.6 13.35Q22.725 13.7 22.425 13.9L19.5 16L20.9 20.5Q21.025 20.85 20.7 21.062Q20.375 21.275 20.1 21.05ZM14.9 8 14.15 5.45 14.7 3.6Q14.75 3.4 14.887 3.312Q15.025 3.225 15.175 3.225Q15.325 3.225 15.463 3.325Q15.6 3.425 15.65 3.6L17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassRounded.displayName = 'AmauiIconMaterialHotelClassRounded';

export default IconMaterialHotelClassRounded;
