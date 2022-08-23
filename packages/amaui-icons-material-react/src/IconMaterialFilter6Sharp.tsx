import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter6Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6Sharp'
      short_name='Filter6'

      {...props}
    >
      <path d="M13 9V7H16V5H11V15H17V9ZM13 11H15V13H13ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialFilter6Sharp.displayName = 'AmauiIconMaterialFilter6Sharp';

export default IconMaterialFilter6Sharp;
