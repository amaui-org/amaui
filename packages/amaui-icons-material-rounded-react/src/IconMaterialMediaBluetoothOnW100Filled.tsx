import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnW100Filled'

      short_name='MediaBluetoothOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.975 20.425q-.125.125-.325.05t-.2-.225v-4.4L13.7 18.6q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25l3.1-3.1-3.15-3.1q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.75 2.75v-4.4q0-.175.225-.238.225-.062.35.063l2.35 2.35q.125.125.163.25.037.125.037.275 0 .15-.05.275-.05.125-.175.25L17.25 15l2.075 2.025q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25Zm.125-6.275 1.75-1.7-1.75-1.75Zm0 5.15 1.75-1.75-1.75-1.7Zm-10.25.15q-1.125 0-1.912-.787-.788-.788-.788-1.913t.788-1.913q.787-.787 1.912-.787.575 0 1.1.225.525.225.9.675v-8.9q0-.625.438-1.063.437-.437 1.062-.437h2q.425 0 .738.312.312.313.312.738t-.312.737q-.313.313-.738.313h-2.8v10.1q0 1.125-.787 1.913-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnW100Filled.displayName = 'AmauiIconMaterialMediaBluetoothOnW100Filled';

export default IconMaterialMediaBluetoothOnW100Filled;
