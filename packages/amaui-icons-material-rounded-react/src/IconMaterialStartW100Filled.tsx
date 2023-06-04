import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StartW100Filled'

      short_name='Start'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.9 16.85q-.125-.1-.112-.25.012-.15.112-.25l4-4H7.125q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.75L15.9 7.625q-.1-.1-.088-.238.013-.137.113-.237.1-.1.238-.1.137 0 .237.1l4.3 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-4.325 4.325q-.1.1-.237.1-.138 0-.238-.1Zm-12.75.5q-.15 0-.25-.1T2.8 17V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialStartW100Filled.displayName = 'AmauiIconMaterialStartW100Filled';

export default IconMaterialStartW100Filled;
