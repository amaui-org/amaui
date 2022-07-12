import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteOutlinedW100Filled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M8.3 13.7V10.3H11.55L14.7 7.15V16.85L11.55 13.7Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeMuteOutlinedW100Filled;
