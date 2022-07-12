import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteOutlinedFilled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M7 15V9H11L16 4V20L11 15Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeMuteOutlinedFilled;
