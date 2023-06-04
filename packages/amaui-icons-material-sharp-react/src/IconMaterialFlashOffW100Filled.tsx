import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffW100Filled'

      short_name='FlashOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.35 12.85-1.5-1.5h2.4ZM13.1 10.6 7.5 5V3.5h8.75Zm-2.95 11.3V14H7.5V8.5L3.65 4.65l.5-.5L20.8 20.8l-.5.5-6.2-6.2Z"/>
    </Icon>
  );
});

IconMaterialFlashOffW100Filled.displayName = 'AmauiIconMaterialFlashOffW100Filled';

export default IconMaterialFlashOffW100Filled;
