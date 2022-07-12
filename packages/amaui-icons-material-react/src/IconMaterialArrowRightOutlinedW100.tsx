import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightOutlinedW100'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M10.65 15.45V8.55L14.1 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightOutlinedW100;
