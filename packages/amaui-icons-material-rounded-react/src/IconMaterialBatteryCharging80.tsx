import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryCharging80 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging80'

      short_name='BatteryCharging80'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v1h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm3.95-3.775 2.65-5q.125-.25-.012-.487-.138-.238-.413-.238H13V9q0-.4-.375-.488-.375-.087-.575.263l-2.65 5q-.125.25.013.487.137.238.412.238H11V18q0 .4.375.487.375.088.575-.262Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging80.displayName = 'AmauiIconMaterialBatteryCharging80';

export default IconMaterialBatteryCharging80;
