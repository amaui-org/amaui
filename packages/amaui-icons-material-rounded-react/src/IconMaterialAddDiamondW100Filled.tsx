import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamondW100Filled'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.5-132q-11.5 0-22.5-4.5T436-150L150-436q-9-10-13.5-20.96Q132-467.91 132-480q0-11 4.5-22.5T150-523l286-286q10-10 20.82-14.5T480-828q11 0 22.5 4.5T523-809l286 286q10 9 14.5 20.5t4.5 23q0 11.5-4.5 22.5T809-436L523-150q-9 9-20.5 13.5t-23 4.5ZM466-466v112q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-112h112q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-112q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v112H354q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h112Z"/>
    </Icon>
  );
});

IconMaterialAddDiamondW100Filled.displayName = 'AmauiIconMaterialAddDiamondW100Filled';

export default IconMaterialAddDiamondW100Filled;
