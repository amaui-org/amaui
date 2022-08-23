import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLargeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeRoundedFilled'
      short_name='PhotoSizeSelectLarge'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V7H15Q15.825 7 16.413 7.587Q17 8.175 17 9V21ZM6 18H14Q14.3 18 14.45 17.725Q14.6 17.45 14.4 17.2L12 14.025Q11.85 13.825 11.6 13.825Q11.35 13.825 11.2 14.025L9 17L7.8 15.375Q7.65 15.175 7.4 15.175Q7.15 15.175 7 15.375L5.6 17.2Q5.4 17.45 5.538 17.725Q5.675 18 6 18ZM3 5Q3 4.175 3.587 3.587Q4.175 3 5 3V5ZM11 5V3H13V5ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM7 5V3H9V5ZM19 13V11H21V13ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 5V3H17V5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLargeRoundedFilled.displayName = 'AmauiIconMaterialPhotoSizeSelectLargeRoundedFilled';

export default IconMaterialPhotoSizeSelectLargeRoundedFilled;
