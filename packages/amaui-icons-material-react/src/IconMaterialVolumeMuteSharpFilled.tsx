import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteSharpFilled'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M16 20 11 15H7V9H11L16 4Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteSharpFilled.displayName = 'AmauiIconMaterialVolumeMuteSharpFilled';

export default IconMaterialVolumeMuteSharpFilled;
