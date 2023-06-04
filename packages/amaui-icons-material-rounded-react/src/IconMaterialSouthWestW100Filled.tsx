import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthWestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestW100Filled'

      short_name='SouthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 18.35q-.325 0-.537-.212-.213-.213-.213-.538V10q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.15l12-12q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-12 12H14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSouthWestW100Filled.displayName = 'AmauiIconMaterialSouthWestW100Filled';

export default IconMaterialSouthWestW100Filled;
