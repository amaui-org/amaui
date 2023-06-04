import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseW100Filled'

      short_name='AutoReadPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 13.35q.15 0 .25-.1t.1-.25V7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v6q0 .15.1.25t.25.1Zm3.2 0q.15 0 .25-.1t.1-.25V7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v6q0 .15.1.25t.25.1Zm-9.025 4.875q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPauseW100Filled.displayName = 'AmauiIconMaterialAutoReadPauseW100Filled';

export default IconMaterialAutoReadPauseW100Filled;
