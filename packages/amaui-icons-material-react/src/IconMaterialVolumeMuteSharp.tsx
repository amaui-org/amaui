import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteSharp'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M7 15V9H11L16 4V20L11 15ZM9 13H11.85L14 15.15V8.85L11.85 11H9ZM11.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteSharp.displayName = 'AmauiIconMaterialVolumeMuteSharp';

export default IconMaterialVolumeMuteSharp;
