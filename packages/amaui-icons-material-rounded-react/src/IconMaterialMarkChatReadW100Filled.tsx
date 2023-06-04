import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadW100Filled'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 18.1 4-4q.1-.1.25-.112.15-.013.25.112.1.1.1.25t-.1.25l-3.975 3.95q-.225.225-.525.225-.3 0-.525-.225l-1.85-1.85q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1ZM6.1 16.7l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v6.85h-6.55q-.625 0-1.062.437-.438.438-.438 1.063v3.55Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadW100Filled.displayName = 'AmauiIconMaterialMarkChatReadW100Filled';

export default IconMaterialMarkChatReadW100Filled;
