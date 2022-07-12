import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardSharpW700Filled'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M12 20.375 9.75 18.15 14.325 13.575H3.625V10.425H14.325L9.75 5.85L12 3.625L20.375 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowForwardSharpW700Filled;
