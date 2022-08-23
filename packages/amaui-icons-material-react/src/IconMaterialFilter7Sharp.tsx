import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter7Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7Sharp'
      short_name='Filter7'

      {...props}
    >
      <path d="M11 15H13L17 7V5H11V7H15ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialFilter7Sharp.displayName = 'AmauiIconMaterialFilter7Sharp';

export default IconMaterialFilter7Sharp;
