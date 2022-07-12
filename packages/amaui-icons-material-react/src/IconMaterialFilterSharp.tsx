import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterSharp'
      short_name='Filter'

      {...props}
    >
      <path d="M9 14H19L15.55 9.5L13.25 12.5L11.7 10.5ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialFilterSharp;
