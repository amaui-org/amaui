import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortW100Filled'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17.35H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12-11H4q-.15 0-.25-.1T3.65 6q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6 5.5H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSortW100Filled.displayName = 'AmauiIconMaterialSortW100Filled';

export default IconMaterialSortW100Filled;
