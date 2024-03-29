import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarFilled'

      short_name='SignalWifi4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687Q3.05 6.2 5.95 5.1 8.85 4 12 4t6.05 1.1q2.9 1.1 5.225 3.2.3.275.313.687.012.413-.288.713L12.7 20.3q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarFilled.displayName = 'AmauiIconMaterialSignalWifi4BarFilled';

export default IconMaterialSignalWifi4BarFilled;
