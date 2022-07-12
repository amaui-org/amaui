import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCorporateFareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareSharp'
      short_name='CorporateFare'

      {...props}
    >
      <path d="M2 21V3H12V7H22V21ZM4 19H10V17H4ZM4 15H10V13H4ZM4 11H10V9H4ZM4 7H10V5H4ZM12 19H20V9H12ZM14 13V11H18V13ZM14 17V15H18V17Z"/>
    </Icon>
  )
});

export default IconMaterialCorporateFareSharp;
