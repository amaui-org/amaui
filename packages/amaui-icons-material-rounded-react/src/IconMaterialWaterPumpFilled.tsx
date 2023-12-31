import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPumpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpFilled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-371q42 0 71-28.5t29-70.5q0-20-7.5-37.5T551-539l-43-42q-12-11-28-11t-28 11l-43 42q-14 14-21.5 31.5T380-470q0 42 29 70.5t71 28.5Zm0 141q-104 0-177-73t-73-177q0-104 73-177t177-73q104 0 177 73t73 177q0 104-73 177t-177 73Zm360-290h-53q-10-78-56-142t-118-98h227q0-17 11.5-28.5T880-800q17 0 28.5 11.5T920-760v240q0 17-11.5 28.5T880-480q-16 0-22.5-14.5T840-520ZM40-200v-240q0-17 11.5-28.5T80-480q17 0 28.5 11.5T120-440h53q10 78 56 142t118 98H120q0 17-11.5 28.5T80-160q-17 0-28.5-11.5T40-200Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpFilled.displayName = 'AmauiIconMaterialWaterPumpFilled';

export default IconMaterialWaterPumpFilled;
