import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendSharpW700Filled'
      short_name='Weekend'

      {...props}
    >
      <path d="M0.225 20.775V10.575H4.625V16H19.375V10.575H23.775V20.775ZM6.625 14V8.575H3.225V3.225H20.775V8.575H17.375V14Z"/>
    </Icon>
  )
});

export default IconMaterialWeekendSharpW700Filled;
