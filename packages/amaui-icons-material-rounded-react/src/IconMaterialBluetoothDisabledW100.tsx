import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledW100'

      short_name='BluetoothDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.2 21.7-4.9-4.9-3.925 3.925q-.075.075-.175.125-.1.05-.2.05-.15 0-.25-.112-.1-.113-.1-.288v-7.65l-5 5q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25L11.5 12 3.75 4.25q-.1-.1-.112-.238-.013-.137.112-.262T4 3.625q.125 0 .25.125L21.7 21.2q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125Zm-8.85-1.95 3.45-3.45-3.45-3.45Zm1.4-9-.5-.5L15.8 7.7l-3.45-3.45v5.1l-.7-.7V3.5q0-.2.1-.3.1-.1.25-.1.1 0 .2.05t.175.125l3.9 3.9q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledW100.displayName = 'AmauiIconMaterialBluetoothDisabledW100';

export default IconMaterialBluetoothDisabledW100;
