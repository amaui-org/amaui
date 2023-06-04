import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessEmptyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmptyW100'

      short_name='BrightnessEmpty'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 956 367.775 844H212V688.225L100 576l112-112.225V308h155.775L480 196l112.225 112H748v155.775L860 576 748 688.225V844H592.225L480 956Zm0-380Zm0 340 100-100h140V676l100-100-100-100V336H580L480 236 380 336H240v140L140 576l100 100v140h140l100 100Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmptyW100.displayName = 'AmauiIconMaterialBrightnessEmptyW100';

export default IconMaterialBrightnessEmptyW100;
