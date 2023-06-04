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
      <path d="m19.525 21.2-5.5-5.5v5h-5.4V10.3l-6.05-6.05.5-.5 16.95 16.95ZM9.325 20h4v-5l-4-4Zm4.7-8.15-.7-.7v-.75l2-3V6.35h-6.8l-.7-.7h7.5V4h-8v1.15l-.7-.7V3.3h9.4v4.3l-2 3Zm-2.7 1.15Zm0-3.85Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100.displayName = 'AmauiIconMaterialFlashlightOffW100';

export default IconMaterialFlashlightOffW100;
