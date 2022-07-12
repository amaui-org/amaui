import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightSharpW700Filled'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M9.425 18.375V5.625L15.8 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightSharpW700Filled;
