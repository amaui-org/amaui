import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter2Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2Sharp'
      short_name='Filter2'

      {...props}
    >
      <path d="M11 15H17V13H13V11H17V5H11V7H15V9H11ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialFilter2Sharp.displayName = 'AmauiIconMaterialFilter2Sharp';

export default IconMaterialFilter2Sharp;
