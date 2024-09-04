import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHovW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HovW100Filled'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 292-481l188-347 188 347-188 349Z"/>
    </Icon>
  );
});

IconMaterialHovW100Filled.displayName = 'AmauiIconMaterialHovW100Filled';

export default IconMaterialHovW100Filled;
