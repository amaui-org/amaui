import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDriveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDriveW100'

      short_name='BluetoothDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.85 15.6q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-12.3 4.1v-7.5l2.075-5.9h9.625V7h-9.1l-1.6 4.5h10.7v.7h-11V17h14v-4.8h.7v7.5h-.7v-2h-14v2Zm15.5-8.85v-4L15.8 9.3l-.5-.5L18.1 6l-2.8-2.8.5-.5 2.45 2.45v-4h.3l2.7 2.7L19.1 6l2.15 2.15-2.7 2.7Zm.7-5.7 1.3-1.3-1.3-1.3Zm0 4.3 1.3-1.3-1.3-1.3ZM3.45 12.2V17Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDriveW100.displayName = 'AmauiIconMaterialBluetoothDriveW100';

export default IconMaterialBluetoothDriveW100;
