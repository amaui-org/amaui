import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdW100Filled'

      short_name='Hd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 14.6q.15 0 .25-.1t.1-.25V12.6h2.8v1.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-4.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H7.5V9.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.5q0 .15.1.25t.25.1Zm6.25 0h2.7q.45 0 .775-.325t.325-.775v-3q0-.45-.325-.775T16.1 9.4h-2.7q-.175 0-.287.112Q13 9.625 13 9.8v4.4q0 .175.113.288.112.112.287.112Zm.3-.7v-3.8h2.4q.15 0 .275.125.125.125.125.275v3q0 .15-.125.275-.125.125-.275.125Zm-8.9 4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialHdW100Filled.displayName = 'AmauiIconMaterialHdW100Filled';

export default IconMaterialHdW100Filled;
