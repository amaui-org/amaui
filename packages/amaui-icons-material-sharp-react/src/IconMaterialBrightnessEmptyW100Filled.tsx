import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessEmptyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmptyW100Filled'

      short_name='BrightnessEmpty'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 956 367.775 844H212V688.225L100 576l112-112.225V308h155.775L480 196l112.225 112H748v155.775L860 576 748 688.225V844H592.225L480 956Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmptyW100Filled.displayName = 'AmauiIconMaterialBrightnessEmptyW100Filled';

export default IconMaterialBrightnessEmptyW100Filled;
