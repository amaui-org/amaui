import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffSharpW100Filled'
      short_name='FlashOff'

      {...props}
    >
      <path d="M15.35 12.85 13.85 11.35H16.25ZM13.1 10.6 7.5 5V3.5H16.25ZM10.15 21.9V14H7.5V8.5L3.65 4.65L4.15 4.15L20.8 20.8L20.3 21.3L14.1 15.1Z"/>
    </Icon>
  );
});

export default IconMaterialFlashOffSharpW100Filled;
