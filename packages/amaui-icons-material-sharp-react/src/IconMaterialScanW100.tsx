import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanW100'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 924V750h28v146h480V750h28v174H212Zm0-362V228h374l162 162v172h-28V404H572V256H240v306h-28ZM70 670v-28h820v28H70Zm410-108Zm0 188Z"/>
    </Icon>
  );
});

IconMaterialScanW100.displayName = 'AmauiIconMaterialScanW100';

export default IconMaterialScanW100;
