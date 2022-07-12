import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffSharpW700Filled'
      short_name='TvOff'

      {...props}
    >
      <path d="M22.8 19.45 5.5 2.15H22.85V19.45ZM20.5 23.825 16.5 19.85H16.45V22.225H7.55V19.85H1.15V4.5L0.175 3.5L1.825 1.825L22.175 22.175Z"/>
    </Icon>
  )
});

export default IconMaterialTvOffSharpW700Filled;
