import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4Sharp'
      short_name='Looks4'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19ZM13 17H15V7H13V11H11V7H9V13H13Z"/>
    </Icon>
  );
});

export default IconMaterialLooks4Sharp;
