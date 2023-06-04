import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOffW100Filled'

      short_name='VolumeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.95 21.4-3-3q-.35.225-.725.4-.375.175-.775.325v-.75q.275-.1.525-.212.25-.113.475-.263l-4-4v2.95L8.3 13.7H5.05v-3.4h2.8l-4.9-4.9.5-.5 16 16ZM18 16.625l-.475-.475q.675-.875 1.05-1.938.375-1.062.375-2.237 0-2.15-1.238-3.9-1.237-1.75-3.262-2.5v-.75q2.325.825 3.763 2.775 1.437 1.95 1.437 4.375 0 1.3-.437 2.487-.438 1.188-1.213 2.163Zm-2.6-2.6-.95-.95V8.85q.75.55 1.125 1.387.375.838.375 1.763 0 .55-.138 1.062-.137.513-.412.963Zm-3.95-3.95L10 8.6l1.45-1.45Z"/>
    </Icon>
  );
});

IconMaterialVolumeOffW100Filled.displayName = 'AmauiIconMaterialVolumeOffW100Filled';

export default IconMaterialVolumeOffW100Filled;
