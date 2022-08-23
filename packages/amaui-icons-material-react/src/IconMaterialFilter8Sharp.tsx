import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter8Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8Sharp'
      short_name='Filter8'

      {...props}
    >
      <path d="M12 10 11 11V15H17V11L16 10L17 9V5H11V9ZM15 7V9H13V7ZM15 11V13H13V11ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialFilter8Sharp.displayName = 'AmauiIconMaterialFilter8Sharp';

export default IconMaterialFilter8Sharp;
