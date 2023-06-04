import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryChange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChange'

      short_name='BatteryChange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m470 802 57-56-38-38q-5-5-7-10.5t-2-11.5q0-7 2-12.5t7-10.5l38-38q16-16 24.5-36t8.5-42q0-23-8.5-43.5T527 467l-38-38-56 57 37 37q5 5 7.5 10.5T480 546q0 6-2.5 11.5T470 568l-37 38q-16 16-24.5 36t-8.5 43q0 23 8.5 43.5T433 765l37 37ZM280 976V256h120v-80h160v80h120v720H280Zm80-80h240V336H360v560Zm0 0h240-240Z"/>
    </Icon>
  );
});

IconMaterialBatteryChange.displayName = 'AmauiIconMaterialBatteryChange';

export default IconMaterialBatteryChange;
