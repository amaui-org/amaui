import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleW100Filled'

      short_name='Rule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.875 9.1 4-4q.1-.1.25-.113.15-.012.25.113.1.1.1.25t-.1.25l-3.95 3.95q-.225.225-.525.225-.3 0-.525-.225L13.5 7.7q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1ZM2.35 8.35q-.15 0-.25-.1T2 8q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm14 8.125L14 18.85q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25L15.875 16 13.5 13.65q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l2.35 2.375 2.35-2.375q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25L16.825 16l2.375 2.35q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1Zm-14-.125q-.15 0-.25-.1T2 16q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRuleW100Filled.displayName = 'AmauiIconMaterialRuleW100Filled';

export default IconMaterialRuleW100Filled;
