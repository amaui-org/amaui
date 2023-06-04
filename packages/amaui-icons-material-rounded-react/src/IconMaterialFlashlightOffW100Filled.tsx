import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffW100Filled'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.125 20.7q-.625 0-1.063-.438-.437-.437-.437-1.062v-8.9l-5.8-5.8Q2.7 4.375 2.7 4.25T2.825 4q.125-.125.263-.125.137 0 .237.125l16.45 16.45q.125.1.125.238 0 .137-.125.262-.1.1-.237.1-.138 0-.263-.1l-5.25-5.25v3.5q0 .625-.437 1.062-.438.438-1.063.438Zm3.9-8.85-5.5-5.5h7.5V7.6l-2 3Zm2-6.2h-8.2L6.65 4.475q.125-.5.525-.838.4-.337.95-.337h6.4q.625 0 1.063.437.437.438.437 1.063Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100Filled.displayName = 'AmauiIconMaterialFlashlightOffW100Filled';

export default IconMaterialFlashlightOffW100Filled;
