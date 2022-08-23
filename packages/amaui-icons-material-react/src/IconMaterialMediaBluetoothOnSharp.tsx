import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOnSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnSharp'
      short_name='MediaBluetoothOn'

      {...props}
    >
      <path d="M17 21V16.45L14.25 19.2L13.4 18.35L16.75 15L13.35 11.65L14.2 10.8L16.95 13.55V9H17.55L21 12.45L18.4 15L21 17.55L17.6 21ZM18.15 13.55 19.3 12.45 18.15 11.3ZM18.15 18.7 19.3 17.55 18.15 16.45ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.35 4.175 14.175Q5.35 13 7 13Q7.575 13 8.062 13.137Q8.55 13.275 9 13.55V3H15V7H11V17Q11 18.65 9.825 19.825Q8.65 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnSharp.displayName = 'AmauiIconMaterialMediaBluetoothOnSharp';

export default IconMaterialMediaBluetoothOnSharp;
