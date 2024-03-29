import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryProfile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfile'

      short_name='BatteryProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21V5q0-.425.287-.713Q4.575 4 5 4h2V3q0-.425.287-.713Q7.575 2 8 2h2q.425 0 .713.287Q11 2.575 11 3v1h2q.425 0 .713.287Q14 4.575 14 5v16q0 .425-.287.712Q13.425 22 13 22Zm1-2h6V6H6Zm12.55-9-.8-1.75-1.75-.8q-.15-.075-.225-.2Q15.7 8.125 15.7 8t.075-.25q.075-.125.225-.2l1.75-.8.8-1.75q.075-.15.2-.225.125-.075.25-.075t.25.075q.125.075.2.225l.8 1.75 1.75.8q.15.075.225.2.075.125.075.25t-.075.25q-.075.125-.225.2l-1.75.8-.8 1.75q-.075.15-.2.225-.125.075-.25.075t-.25-.075q-.125-.075-.2-.225Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfile.displayName = 'AmauiIconMaterialBatteryProfile';

export default IconMaterialBatteryProfile;
