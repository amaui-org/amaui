import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeMuteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100Filled'

      short_name='VolumeMute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 13.7v-3.4h3.25l3.15-3.15v9.7l-3.15-3.15Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100Filled.displayName = 'AmauiIconMaterialVolumeMuteW100Filled';

export default IconMaterialVolumeMuteW100Filled;
