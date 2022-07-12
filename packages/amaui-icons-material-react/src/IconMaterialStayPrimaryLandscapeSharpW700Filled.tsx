import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscapeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeSharpW700Filled'
      short_name='StayPrimaryLandscape'

      {...props}
    >
      <path d="M0.225 19.775V4.225H23.775V19.775ZM6.375 16.625H17.625V7.375H6.375Z"/>
    </Icon>
  )
});

export default IconMaterialStayPrimaryLandscapeSharpW700Filled;
