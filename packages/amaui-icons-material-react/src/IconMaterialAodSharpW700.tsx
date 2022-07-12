import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodSharpW700'
      short_name='Aod'

      {...props}
    >
      <path d="M8.375 11.5V10H15.625V11.5ZM9.375 14.5V13H14.625V14.5ZM4.225 23.775V0.225H19.775V23.775ZM7.375 17.625H16.625V6.375H7.375ZM7.375 20.625H16.625V19.625H7.375ZM7.375 4.375H16.625V3.375H7.375ZM7.375 4.375V3.375V4.375ZM7.375 20.625V19.625V20.625Z"/>
    </Icon>
  )
});

export default IconMaterialAodSharpW700;
