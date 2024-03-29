import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignature = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Signature'

      short_name='Signature'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M563 565q73-54 114-118.5T718 318q0-32-10.5-47T679 256q-47 0-83 79.5T560 515q0 14 .5 26.5T563 565ZM120 936v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM136 776l-56-56 64-64-64-64 56-56 64 64 64-64 56 56-64 64 64 64-56 56-64-64-64 64Zm482-40q-30 0-55-11.5T520 687q-25 14-51.5 25T414 734l-28-75q28-10 53.5-21.5T489 613q-5-22-7.5-48t-2.5-56q0-144 57-238.5T679 176q52 0 85 38.5T797 322q0 86-54.5 170T591 643q7 7 14.5 10.5T621 657q26 0 60.5-33t62.5-87l73 34q-7 17-11 41t1 42q10-5 23.5-17t27.5-30l63 49q-26 36-60 58t-63 22q-21 0-37.5-12.5T733 685q-28 25-57 38t-58 13Z"/>
    </Icon>
  );
});

IconMaterialSignature.displayName = 'AmauiIconMaterialSignature';

export default IconMaterialSignature;
