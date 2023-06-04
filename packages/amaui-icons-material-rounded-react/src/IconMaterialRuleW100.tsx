import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleW100'

      short_name='Rule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.525 9.1 4-4q.1-.1.25-.113.15-.012.25.113.1.1.1.25t-.1.25l-3.95 3.95q-.225.225-.525.225-.3 0-.525-.225L14.15 7.7q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1ZM3 8.35q-.15 0-.25-.1T2.65 8q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm14 8.125-2.35 2.375q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25L16.525 16l-2.375-2.35q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1L17 15.525l2.35-2.375q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25L17.475 16l2.375 2.35q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1ZM3 16.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRuleW100.displayName = 'AmauiIconMaterialRuleW100';

export default IconMaterialRuleW100;
