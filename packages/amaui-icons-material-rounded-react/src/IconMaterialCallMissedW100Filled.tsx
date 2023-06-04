import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedW100Filled'

      short_name='CallMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.125 16.2q-.15 0-.275-.05-.125-.05-.25-.175L4.475 8.85V14q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V8.4q0-.325.213-.538.212-.212.537-.212h5.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.15l7.15 7.15L19.5 8.125q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-7.325 7.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialCallMissedW100Filled.displayName = 'AmauiIconMaterialCallMissedW100Filled';

export default IconMaterialCallMissedW100Filled;
