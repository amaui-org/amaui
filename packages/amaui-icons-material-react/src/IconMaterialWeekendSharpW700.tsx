import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendSharpW700'
      short_name='Weekend'

      {...props}
    >
      <path d="M0.225 20.775V8.35H3.225V3.225H20.775V8.35H23.775V20.775ZM7.775 13.225H16.225V8.35H17.625V6.375H6.375V8.35H7.775ZM3.375 17.625H20.625V11.375H19.375V16.375H4.625V11.375H3.375ZM12 16.375ZM12 13.225ZM12 16.375Z"/>
    </Icon>
  )
});

export default IconMaterialWeekendSharpW700;
