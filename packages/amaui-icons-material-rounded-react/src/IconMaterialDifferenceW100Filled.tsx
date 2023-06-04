import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDifferenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceW100Filled'

      short_name='Difference'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 10.35q.15 0 .25-.1t.1-.25V8.35h1.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V6q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H11.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V10q0 .15.1.25t.25.1Zm-2 4h4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM8.8 17.7q-.65 0-1.075-.425Q7.3 16.85 7.3 16.2V3.8q0-.65.425-1.075Q8.15 2.3 8.8 2.3h6.55q.125 0 .263.05.137.05.237.15l3.65 3.65q.1.1.15.237.05.138.05.263v9.55q0 .65-.425 1.075-.425.425-1.075.425Zm-4 4q-.65 0-1.075-.425Q3.3 20.85 3.3 20.2V8.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V20.2q0 .3.25.55.25.25.55.25h8.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDifferenceW100Filled.displayName = 'AmauiIconMaterialDifferenceW100Filled';

export default IconMaterialDifferenceW100Filled;
