import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteOutlinedW700'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M6.15 15.85V8.15H10.65L16.85 1.975V22.025L10.65 15.85ZM9.3 12.7H11.975L13.7 14.425V9.575L11.975 11.3H9.3ZM11.5 12Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeMuteOutlinedW700;
