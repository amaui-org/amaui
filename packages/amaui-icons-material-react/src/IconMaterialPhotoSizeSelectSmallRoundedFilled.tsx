import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectSmallRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmallRoundedFilled'
      short_name='PhotoSizeSelectSmall'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V11H11Q11.825 11 12.413 11.587Q13 12.175 13 13V21ZM3 9V7H5V9ZM3 5Q3 4.175 3.587 3.587Q4.175 3 5 3V5ZM5 19H11Q11.3 19 11.45 18.725Q11.6 18.45 11.4 18.2L9.8 16.025Q9.675 15.825 9.413 15.825Q9.15 15.825 9 16.025L7.5 18L6.5 16.675Q6.35 16.475 6.1 16.488Q5.85 16.5 5.7 16.7L4.575 18.2Q4.375 18.45 4.525 18.725Q4.675 19 5 19ZM7 5V3H9V5ZM11 5V3H13V5ZM15 21V19H17V21ZM15 5V3H17V5ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 17V15H21V17ZM19 13V11H21V13ZM19 9V7H21V9ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectSmallRoundedFilled.displayName = 'AmauiIconMaterialPhotoSizeSelectSmallRoundedFilled';

export default IconMaterialPhotoSizeSelectSmallRoundedFilled;
