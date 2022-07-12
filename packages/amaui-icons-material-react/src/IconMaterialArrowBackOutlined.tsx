import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackOutlined'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M12 20 4 12 12 4 13.425 5.4 7.825 11H20V13H7.825L13.425 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackOutlined;
