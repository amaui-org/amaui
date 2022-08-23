import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLargeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeRoundedW100'
      short_name='PhotoSizeSelectLarge'

      {...props}
    >
      <path d="M5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19V8H14.5Q15.125 8 15.562 8.438Q16 8.875 16 9.5V19.7ZM7.125 18H13.2Q13.475 18 13.575 17.775Q13.675 17.55 13.525 17.35L11.725 14.975Q11.6 14.825 11.4 14.825Q11.2 14.825 11.075 14.975L9.4 17.25L8.475 16.025Q8.35 15.875 8.15 15.875Q7.95 15.875 7.825 16.025L6.8 17.35Q6.65 17.55 6.763 17.775Q6.875 18 7.125 18ZM4.3 5Q4.3 4.7 4.5 4.5Q4.7 4.3 5 4.3V5ZM11 5V4.3H13V5ZM19 5V4.3Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5ZM7 5V4.3H9V5ZM19 13V11H19.7V13ZM19 19.7V19H19.7Q19.7 19.3 19.5 19.5Q19.3 19.7 19 19.7ZM19 8.75V6.75H19.7V8.75ZM19 17.25V15.25H19.7V17.25ZM15 5V4.3H17V5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLargeRoundedW100.displayName = 'AmauiIconMaterialPhotoSizeSelectLargeRoundedW100';

export default IconMaterialPhotoSizeSelectLargeRoundedW100;
