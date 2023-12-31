import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayShapes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayShapes'

      short_name='PlayShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m576-540-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104ZM80-520l200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm304 480v-320h320v320H520Zm80-80h160v-160H600v160ZM280-658Zm0 378Zm400 0Z"/>
    </Icon>
  );
});

IconMaterialPlayShapes.displayName = 'AmauiIconMaterialPlayShapes';

export default IconMaterialPlayShapes;
