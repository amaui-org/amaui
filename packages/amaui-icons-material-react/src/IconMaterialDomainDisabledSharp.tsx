import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabledSharp'
      short_name='DomainDisabled'

      {...props}
    >
      <path d="M22 19.15 20 17.15V9H11.85L10 7.15V5H7.85L5.85 3H12V7H22ZM20.5 23.3 18.15 21H2V4.8L0.7 3.5L2.1 2.1L21.9 21.9ZM4 19H6V17H4ZM4 15H6V13H4ZM4 11H6V9H4ZM8 19H10V17H8ZM8 15H10V13H8ZM12 19H16.15L14.15 17H12ZM18 13H16V11H18Z"/>
    </Icon>
  );
});

export default IconMaterialDomainDisabledSharp;
