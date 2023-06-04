import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeMuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100'

      short_name='VolumeMute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 13.7v-3.4h3.25l3.15-3.15v9.7l-3.15-3.15ZM9 13h2.85L14 15.15v-6.3L11.85 11H9Zm2.5-1Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100.displayName = 'AmauiIconMaterialVolumeMuteW100';

export default IconMaterialVolumeMuteW100;
