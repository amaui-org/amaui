import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanFilled'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M880 696H80q-17 0-28.5-11.5T40 656q0-17 11.5-28.5T80 616h800q17 0 28.5 11.5T920 656q0 17-11.5 28.5T880 696ZM720 456 520 256v160q0 17 11.5 28.5T560 456h160ZM240 976q-33 0-56.5-23.5T160 896V776h640v120q0 33-23.5 56.5T720 976H240Zm-80-440V256q0-33 23.5-56.5T240 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v87H160Z"/>
    </Icon>
  );
});

IconMaterialScanFilled.displayName = 'AmauiIconMaterialScanFilled';

export default IconMaterialScanFilled;
