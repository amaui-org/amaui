import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessEmptyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmptyW100'

      short_name='BrightnessEmpty'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m459 935-91.278-91H242q-12.75 0-21.375-8.625T212 814V688.278L121 597q-9-9-9-21t9-21l91-91.278V338q0-12.75 8.625-21.375T242 308h125.722L459 217q9-9 21-9t21 9l91.278 91H718q12.75 0 21.375 8.625T748 338v125.722L839 555q9 9 9 21t-9 21l-91 91.278V814q0 12.75-8.625 21.375T718 844H592.278L501 935q-9 9-21 9t-21-9Zm21-359Zm0 340 100-100h140V676l100-100-100-100V336H580L480 236 380 336H240v140L140 576l100 100v140h140l100 100Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmptyW100.displayName = 'AmauiIconMaterialBrightnessEmptyW100';

export default IconMaterialBrightnessEmptyW100;
