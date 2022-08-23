import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardSharp'
      short_name='DeveloperBoard'

      {...props}
    >
      <path d="M2 21V3H20V7H22V9H20V11H22V13H20V15H22V17H20V21ZM4 19H18V5H4ZM6 17H11V13H6ZM12 10H16V7H12ZM6 12H11V7H6ZM12 17H16V11H12ZM4 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardSharp.displayName = 'AmauiIconMaterialDeveloperBoardSharp';

export default IconMaterialDeveloperBoardSharp;
