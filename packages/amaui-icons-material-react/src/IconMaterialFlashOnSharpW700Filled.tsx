import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnSharpW700Filled'
      short_name='FlashOn'

      {...props}
    >
      <path d="M9.3 23.775V13.475H6.3V0.475H17.575L13.575 9.475H17.7Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOnSharpW700Filled;
