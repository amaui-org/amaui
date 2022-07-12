import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteOutlinedW700Filled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M6.15 15.85V8.15H10.65L16.85 1.975V22.025L10.65 15.85Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeMuteOutlinedW700Filled;
