import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleFolderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderW100'

      short_name='RuleFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.825 14.775q.15 0 .275-.05.125-.05.25-.175l3.25-3.25q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-3.275 3.275-1.15-1.15q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25L7.3 14.55q.125.125.25.175.125.05.275.05Zm6.325.075q.1.1.25.1t.25-.1L16 13.475l1.35 1.375q.1.1.25.1t.25-.1q.1-.1.1-.25t-.1-.25L16.475 13l1.375-1.35q.1-.1.1-.25t-.1-.25q-.1-.1-.25-.1t-.25.1L16 12.525l-1.35-1.375q-.1-.1-.25-.1t-.25.1q-.1.1-.1.25t.1.25L15.525 13l-1.375 1.35q-.1.1-.1.25t.1.25ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.9q.125 0 .263.05.137.05.237.15l.8.8h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-1-1H4.8q-.35 0-.575.225Q4 7.45 4 7.8Zm0 0V7v11V17.2Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderW100.displayName = 'AmauiIconMaterialRuleFolderW100';

export default IconMaterialRuleFolderW100;
