import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLock'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM160-560h640-640Zm80 400v-120H120q-17 0-28.5-11.5T80-320v-200q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v30q-18-10-38-17t-42-10v-3q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-40q0-17 11.5-28.5T280-440h300q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H280q-17 0-28.5-11.5T240-160Zm0-480v-120q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v120h-80v-120H320v120h-80Z"/>
    </Icon>
  );
});

IconMaterialPrintLock.displayName = 'AmauiIconMaterialPrintLock';

export default IconMaterialPrintLock;
