import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffW100'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 20.95q-.125.125-.25.125t-.25-.125l-5.25-5.25v3.5q0 .625-.437 1.062-.438.438-1.063.438h-2.4q-.625 0-1.063-.438-.437-.437-.437-1.062v-8.9l-5.8-5.8q-.1-.1-.112-.238Q2.7 4.125 2.825 4t.25-.125q.125 0 .25.125l16.45 16.45q.1.1.113.238.012.137-.113.262ZM9.325 11v8.2q0 .35.225.575.225.225.575.225h2.4q.35 0 .575-.225.225-.225.225-.575V15Zm4.7.85-.7-.7v-.75l2-3V6.35h-6.8l-.7-.7h7.5V4.8q0-.35-.225-.575Q14.875 4 14.525 4h-6.4q-.35 0-.575.225-.225.225-.225.575v.35l-.675-.675q.125-.5.525-.838.4-.337.95-.337h6.4q.625 0 1.063.437.437.438.437 1.063v2.8l-2 3Zm-2.7 1.15Zm0-3.85Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100.displayName = 'AmauiIconMaterialFlashlightOffW100';

export default IconMaterialFlashlightOffW100;
