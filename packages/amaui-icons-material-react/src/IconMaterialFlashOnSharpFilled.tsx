import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnSharpFilled'
      short_name='FlashOn'

      {...props}
    >
      <path d="M10 23V14H7V2H17L13 11H17Z"/>
    </Icon>
  );
});

export default IconMaterialFlashOnSharpFilled;
