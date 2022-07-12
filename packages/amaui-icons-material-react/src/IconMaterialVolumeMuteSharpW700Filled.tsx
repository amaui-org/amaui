import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteSharpW700Filled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M16.85 22.025 10.65 15.85H6.15V8.15H10.65L16.85 1.975Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeMuteSharpW700Filled;
