import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightOutlinedFilled'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M10 17V7L15 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightOutlinedFilled;
