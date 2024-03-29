import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDrive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDrive'

      short_name='BluetoothDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 16q.625 0 1.062-.438Q8 15.125 8 14.5t-.438-1.062Q7.125 13 6.5 13t-1.062.438Q5 13.875 5 14.5t.438 1.062Q5.875 16 6.5 16Zm9 0q.625 0 1.062-.438Q17 15.125 17 14.5t-.438-1.062Q16.125 13 15.5 13t-1.062.438Q14 13.875 14 14.5t.438 1.062Q14.875 16 15.5 16Zm-12 5q-.625 0-1.062-.438Q2 20.125 2 19.5V12l2.1-6q.15-.45.538-.725Q5.025 5 5.5 5H15v2H5.85L4.8 10H15v2H4v5h14v-5h2v7.5q0 .625-.438 1.062Q19.125 21 18.5 21t-1.062-.438Q17 20.125 17 19.5V19H5v.5q0 .625-.438 1.062Q4.125 21 3.5 21Zm15.4-10.125q-.1-.05-.175-.163-.075-.112-.075-.237V7.2L16.7 9.15q-.15.15-.35.15-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35L18.45 6 16 3.55q-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15l1.95 1.95V1.525q0-.125.063-.238.062-.112.187-.162.1-.05.238-.025.137.025.212.1l2.3 2.35q.15.15.15.35 0 .2-.15.35L19.85 6l1.8 1.8q.15.15.15.35 0 .2-.15.35l-2.3 2.3q-.075.075-.2.1-.125.025-.25-.025Zm.75-6.075.95-.9-.95-.95Zm0 4.3.95-.95-.95-.95ZM4 12v5-5Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDrive.displayName = 'AmauiIconMaterialBluetoothDrive';

export default IconMaterialBluetoothDrive;
