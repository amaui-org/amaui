import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPointScanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScanFilled'

      short_name='PointScan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 656q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm0-240q-17 0-28.5-11.5T440 376V256q0-17 11.5-28.5T480 216q17 0 28.5 11.5T520 256v120q0 17-11.5 28.5T480 416Zm0 520q-17 0-28.5-11.5T440 896V776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776v120q0 17-11.5 28.5T480 936Zm200-320q-17 0-28.5-11.5T640 576q0-17 11.5-28.5T680 536h120q17 0 28.5 11.5T840 576q0 17-11.5 28.5T800 616H680Zm-520 0q-17 0-28.5-11.5T120 576q0-17 11.5-28.5T160 536h120q17 0 28.5 11.5T320 576q0 17-11.5 28.5T280 616H160Z"/>
    </Icon>
  );
});

IconMaterialPointScanFilled.displayName = 'AmauiIconMaterialPointScanFilled';

export default IconMaterialPointScanFilled;
