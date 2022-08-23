import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainSharpFilled'
      short_name='Domain'

      {...props}
    >
      <path d="M2 21V3H12V7H22V21ZM4 19H6V17H4ZM4 15H6V13H4ZM4 11H6V9H4ZM4 7H6V5H4ZM8 19H10V17H8ZM8 15H10V13H8ZM8 11H10V9H8ZM8 7H10V5H8ZM12 19H20V9H12V11H14V13H12V15H14V17H12ZM16 13V11H18V13ZM16 17V15H18V17Z"/>
    </Icon>
  );
});

IconMaterialDomainSharpFilled.displayName = 'AmauiIconMaterialDomainSharpFilled';

export default IconMaterialDomainSharpFilled;
