import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultW100Filled'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.7q-.275 0-.487-.213Q4.3 19.275 4.3 19V5q0-.275.213-.488Q4.725 4.3 5 4.3h14q.275 0 .488.212.212.213.212.488v14q0 .275-.212.487-.213.213-.488.213Zm3.15-3.85q.1.1.25.1t.25-.1L12 12.475l3.35 3.375q.1.1.25.1t.25-.1q.1-.1.1-.25t-.1-.25L12.475 12l3.375-3.35q.1-.1.1-.25t-.1-.25q-.1-.1-.25-.1t-.25.1L12 11.525 8.65 8.15q-.1-.1-.25-.1t-.25.1q-.1.1-.1.25t.1.25L11.525 12 8.15 15.35q-.1.1-.1.25t.1.25Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultW100Filled.displayName = 'AmauiIconMaterialDisabledByDefaultW100Filled';

export default IconMaterialDisabledByDefaultW100Filled;
