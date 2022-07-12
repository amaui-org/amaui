import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigateNextOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextOutlined'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M9.4 18 8 16.6 12.6 12 8 7.4 9.4 6 15.4 12Z"/>
    </Icon>
  )
});

export default IconMaterialNavigateNextOutlined;
