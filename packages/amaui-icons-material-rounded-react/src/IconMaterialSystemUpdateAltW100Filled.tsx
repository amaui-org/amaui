import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltW100Filled'

      short_name='SystemUpdateAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h3.5q.15 0 .25.1t.1.25q0 .15-.1.25T8.3 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6h-3.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.5q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-4.25q-.15 0-.275-.05-.125-.05-.25-.175l-3.35-3.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l3 3V5.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.75l3.025-3.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-3.325 3.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltW100Filled.displayName = 'AmauiIconMaterialSystemUpdateAltW100Filled';

export default IconMaterialSystemUpdateAltW100Filled;
