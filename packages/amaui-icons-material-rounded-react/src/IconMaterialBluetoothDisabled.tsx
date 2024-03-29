import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabled'

      short_name='BluetoothDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.1 21.9-3.5-3.5-2.725 2.725q-.2.2-.45.313-.25.112-.5.112-.4 0-.663-.275Q11 21 11 20.575V14.4l-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.2-4.2-7.8-7.8q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM13 18.15 14.15 17 13 15.85Zm1.1-6.85-1.4-1.4 2.2-2.2L13 5.85v4.35l-2-2V3.425q0-.425.262-.7.263-.275.663-.275.25 0 .5.112.25.113.45.313L17 7q.15.15.213.325.062.175.062.375t-.062.375Q17.15 8.25 17 8.4Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabled.displayName = 'AmauiIconMaterialBluetoothDisabled';

export default IconMaterialBluetoothDisabled;
