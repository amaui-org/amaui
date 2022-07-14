import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteSharpW100Filled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M14.7 16.85 11.55 13.7H8.3V10.3H11.55L14.7 7.15Z"/>
    </Icon>
  );
});

export default IconMaterialVolumeMuteSharpW100Filled;
