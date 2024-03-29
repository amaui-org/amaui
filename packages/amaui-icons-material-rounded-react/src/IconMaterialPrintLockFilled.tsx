import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLockFilled'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM280-120q-17 0-28.5-11.5T240-160v-120H120q-17 0-28.5-11.5T80-320v-200q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v30q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530-360H320v160h204q7 22 17 42t24 38H280Zm-40-560v-80q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v80H240Z"/>
    </Icon>
  );
});

IconMaterialPrintLockFilled.displayName = 'AmauiIconMaterialPrintLockFilled';

export default IconMaterialPrintLockFilled;
