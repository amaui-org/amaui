import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendSharp'
      short_name='Weekend'

      {...props}
    >
      <path d="M1 20V9H4V4H20V9H23V20ZM7 14H17V9H18V6H6V9H7ZM3 18H21V11H19V16H5V11H3ZM12 16ZM12 14ZM12 16Z"/>
    </Icon>
  );
});

export default IconMaterialWeekendSharp;
