import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupervisedUserCircleOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisedUserCircleOff'

      short_name='SupervisedUserCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-61 17-116.5T146-700l-63-63q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-63-62q-48 32-103.5 49T480-80Zm-68-88q26-51 62-81.5t75-47.5L204-642q-21 36-32.5 76.5T160-480q0 45 11.5 86t34.5 76q41-20 85-31t89-11q32 0 61.5 5.5T500-340q-23 12-43.5 28T418-278q-12-2-20.5-2H380q-32 0-63.5 7T256-252q32 32 71.5 53.5T412-168Zm402-92-58-58q21-35 32.5-76t11.5-86q0-134-93-227t-227-93q-45 0-85.5 11.5T318-756l-58-58q48-32 103.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T814-260ZM520-554 374-700q62-2 105 41.5T520-554ZM380-420q-58 0-99-41t-41-99q0-33 14.5-60.5T292-668l196 196q-20 23-47.5 37.5T380-420Zm310 36L564-510q10-31 36-50.5t60-19.5q42 0 71 29t29 71q0 34-19.5 60T690-384ZM537-537ZM423-423Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircleOff.displayName = 'AmauiIconMaterialSupervisedUserCircleOff';

export default IconMaterialSupervisedUserCircleOff;
