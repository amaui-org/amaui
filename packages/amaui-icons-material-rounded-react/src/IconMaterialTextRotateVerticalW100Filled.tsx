import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalW100Filled'

      short_name='TextRotateVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.9 13.05h4.2l-2-5.5H16ZM6.05 17.8q-.15 0-.275-.05-.125-.05-.25-.175L3.7 15.75q-.1-.1-.112-.238-.013-.137.112-.262.1-.1.238-.113.137-.012.262.088l1.5 1.425V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.65l1.5-1.425q.125-.1.25-.1t.25.125q.125.125.125.25t-.125.25l-1.825 1.825q-.125.125-.25.175-.125.05-.275.05Zm6.325-1.25q-.225 0-.325-.15t-.025-.35l3.55-9.275q.05-.125.187-.225.138-.1.288-.1.15 0 .287.1.138.1.188.225l3.45 9.275q.075.2-.025.35-.1.15-.325.15-.1 0-.175-.05-.075-.05-.125-.15l-.975-2.65h-4.7l-.975 2.65q-.05.1-.125.15-.075.05-.175.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalW100Filled.displayName = 'AmauiIconMaterialTextRotateVerticalW100Filled';

export default IconMaterialTextRotateVerticalW100Filled;
