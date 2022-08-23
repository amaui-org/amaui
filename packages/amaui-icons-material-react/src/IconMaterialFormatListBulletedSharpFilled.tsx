import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatListBulletedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedSharpFilled'
      short_name='FormatListBulleted'

      {...props}
    >
      <path d="M4.5 13.5Q3.875 13.5 3.438 13.062Q3 12.625 3 12Q3 11.375 3.438 10.938Q3.875 10.5 4.5 10.5Q5.125 10.5 5.562 10.938Q6 11.375 6 12Q6 12.625 5.562 13.062Q5.125 13.5 4.5 13.5ZM4.5 7.5Q3.875 7.5 3.438 7.062Q3 6.625 3 6Q3 5.375 3.438 4.938Q3.875 4.5 4.5 4.5Q5.125 4.5 5.562 4.938Q6 5.375 6 6Q6 6.625 5.562 7.062Q5.125 7.5 4.5 7.5ZM4.5 19.5Q3.875 19.5 3.438 19.062Q3 18.625 3 18Q3 17.375 3.438 16.938Q3.875 16.5 4.5 16.5Q5.125 16.5 5.562 16.938Q6 17.375 6 18Q6 18.625 5.562 19.062Q5.125 19.5 4.5 19.5ZM8 19V17H21V19ZM8 13V11H21V13ZM8 7V5H21V7Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedSharpFilled.displayName = 'AmauiIconMaterialFormatListBulletedSharpFilled';

export default IconMaterialFormatListBulletedSharpFilled;
