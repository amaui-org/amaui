import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi0Bar'

      short_name='SignalWifi0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687Q3.05 6.175 5.95 5.088 8.85 4 12 4t6.05 1.088q2.9 1.087 5.225 3.212.3.275.313.687.012.413-.288.713L12.7 20.3q-.15.15-.325.212-.175.063-.375.063Zm0-2.425 9.1-9.1q-1.975-1.5-4.3-2.275Q14.475 6 12 6q-2.475 0-4.8.775-2.325.775-4.3 2.275Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi0Bar.displayName = 'AmauiIconMaterialSignalWifi0Bar';

export default IconMaterialSignalWifi0Bar;
