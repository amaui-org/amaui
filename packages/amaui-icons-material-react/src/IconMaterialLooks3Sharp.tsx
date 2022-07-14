import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks3Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3Sharp'
      short_name='Looks3'

      {...props}
    >
      <path d="M9 17H15V7H9V9H13V11H11V13H13V15H9ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialLooks3Sharp;
