import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnTwoTone'
      short_name='FlashOn'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 10h-4l3-8H7v11h3v9z"/>
    </Icon>
  );
});

export default IconMaterialFlashOnTwoTone;
