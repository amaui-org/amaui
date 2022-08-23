import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks5Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5Sharp'
      short_name='Looks5'

      {...props}
    >
      <path d="M9 17H15V11H11V9H15V7H9V13H13V15H9ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialLooks5Sharp.displayName = 'AmauiIconMaterialLooks5Sharp';

export default IconMaterialLooks5Sharp;
