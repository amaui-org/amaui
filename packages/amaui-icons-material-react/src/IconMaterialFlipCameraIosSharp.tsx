import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipCameraIosSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraIosSharp'
      short_name='FlipCameraIos'

      {...props}
    >
      <path d="M16.25 10.5 13.75 13 14.8 14.05 15.45 13.4Q15.3 14.725 14.325 15.613Q13.35 16.5 12 16.5Q11.65 16.5 11.35 16.438Q11.05 16.375 10.75 16.25L9.65 17.35Q10.175 17.65 10.763 17.825Q11.35 18 12 18Q14 18 15.412 16.65Q16.825 15.3 16.95 13.35L17.7 14.05L18.75 13ZM7.75 15.5 10.25 13 9.2 11.95 8.55 12.6Q8.7 11.275 9.675 10.387Q10.65 9.5 12 9.5Q12.35 9.5 12.65 9.562Q12.95 9.625 13.25 9.75L14.35 8.65Q13.825 8.35 13.238 8.175Q12.65 8 12 8Q10 8 8.588 9.35Q7.175 10.7 7.05 12.65L6.3 11.95L5.25 13ZM2 21V5H7.15L9 3H15L16.85 5H22V21ZM4 19H20V7H4ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraIosSharp.displayName = 'AmauiIconMaterialFlipCameraIosSharp';

export default IconMaterialFlipCameraIosSharp;
