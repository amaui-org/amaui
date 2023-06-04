import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WardW100Filled'

      short_name='Ward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 3.3h1.6q.325 0 .538.212.212.213.212.538V20.7q-.45-.275-.575-.625-.125-.35-.125-.875V4H3.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1Zm5.85 17.4q-.625 0-1.062-.438-.438-.437-.438-1.062V4.8q0-.625.438-1.063Q9.025 3.3 9.65 3.3h7.4q.625 0 1.063.437.437.438.437 1.063v14.4q0 .625-.437 1.062-.438.438-1.063.438Zm-.8-8.525q.375-.425.888-.65.512-.225 1.112-.225h5q.6 0 1.112.225.513.225.888.65V4.8q0-.35-.225-.575Q17.4 4 17.05 4h-7.4q-.35 0-.575.225-.225.225-.225.575ZM13.35 9q-.575 0-.963-.387Q12 8.225 12 7.65t.387-.962q.388-.388.963-.388t.962.388q.388.387.388.962t-.388.963Q13.925 9 13.35 9ZM13 16.35V18q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-1.65h1.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H13.7V14q0-.15-.1-.25t-.25-.1q-.15 0-.25.1T13 14v1.65h-1.65q-.15 0-.25.1T11 16q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialWardW100Filled.displayName = 'AmauiIconMaterialWardW100Filled';

export default IconMaterialWardW100Filled;
