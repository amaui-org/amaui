import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOffSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffSharpW700'
      short_name='FlashOff'

      {...props}
    >
      <path d="M16.425 11.925 13.975 9.475H17.875ZM13.825 9.325 6.5 2V0.475H17.775ZM9.5 23.775V13.475H6.5V8.7L0.95 3.125L2.6 1.45L21.9 20.75L20.225 22.4L13.95 16.15Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOffSharpW700;
