import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendSharpFilled'
      short_name='Weekend'

      {...props}
    >
      <path d="M1 20V10H5V16H19V10H23V20ZM7 14V8H4V4H20V8H17V14Z"/>
    </Icon>
  )
});

export default IconMaterialWeekendSharpFilled;
