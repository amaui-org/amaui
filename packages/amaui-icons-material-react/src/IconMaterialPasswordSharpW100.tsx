import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPasswordSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasswordSharpW100'
      short_name='Password'

      {...props}
    >
      <path d="M2.65 18.35V17.65H21.35V18.35ZM3 12.4 2.4 12.05 3.4 10.3H1.4V9.6H3.4L2.4 7.9L3 7.55L4 9.25L5 7.55L5.6 7.9L4.6 9.6H6.6V10.3H4.6L5.6 12.05L5 12.4L4 10.65ZM11 12.4 10.4 12.05 11.4 10.3H9.4V9.6H11.4L10.4 7.9L11 7.55L12 9.25L13 7.55L13.6 7.9L12.6 9.6H14.6V10.3H12.6L13.6 12.05L13 12.4L12 10.65ZM19 12.4 18.4 12.05 19.4 10.3H17.4V9.6H19.4L18.4 7.9L19 7.55L20 9.25L21 7.55L21.6 7.9L20.6 9.6H22.6V10.3H20.6L21.6 12.05L21 12.4L20 10.65Z"/>
    </Icon>
  );
});

IconMaterialPasswordSharpW100.displayName = 'AmauiIconMaterialPasswordSharpW100';

export default IconMaterialPasswordSharpW100;
