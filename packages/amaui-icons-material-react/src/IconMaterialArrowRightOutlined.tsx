import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightOutlined'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M10 17V7L15 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightOutlined;
