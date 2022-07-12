import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardOutlinedW100Filled'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M12 19 11.5 18.5 17.65 12.35H5V11.65H17.65L11.5 5.5L12 5L19 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowForwardOutlinedW100Filled;
