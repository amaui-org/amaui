import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardOutlined'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M12 20 10.575 18.6 16.175 13H4V11H16.175L10.575 5.4L12 4L20 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowForwardOutlined;
