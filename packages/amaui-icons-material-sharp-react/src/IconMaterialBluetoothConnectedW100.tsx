import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothConnectedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothConnectedW100'

      short_name='BluetoothConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.1v-8.25L6.4 18.1l-.5-.5 5.6-5.6-5.6-5.6.5-.5 5.25 5.25V2.9H12l4.8 4.8-4.3 4.3 4.3 4.3-4.8 4.8Zm.7-9.95L15.8 7.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45ZM5.5 12.7q-.275 0-.487-.213Q4.8 12.275 4.8 12t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm13 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialBluetoothConnectedW100.displayName = 'AmauiIconMaterialBluetoothConnectedW100';

export default IconMaterialBluetoothConnectedW100;
