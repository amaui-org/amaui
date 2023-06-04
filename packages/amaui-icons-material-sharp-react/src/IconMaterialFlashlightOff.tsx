import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOff'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 16 18.8V22H8V10.8L1.4 4.2l1.4-1.4 18.4 18.4ZM10 20h4v-3.2l-4-4Zm6-6.85-2-2v-.75l2-3V7H9.85l-2-2H16V4H6.85L6 3.15V2h12v6l-2 3Zm-4 1.65Zm0-5.65Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOff.displayName = 'AmauiIconMaterialFlashlightOff';

export default IconMaterialFlashlightOff;
