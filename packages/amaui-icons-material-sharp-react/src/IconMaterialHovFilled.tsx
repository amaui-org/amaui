import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHovFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HovFilled'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 240-480l240-400 240 400L480-80Z"/>
    </Icon>
  );
});

IconMaterialHovFilled.displayName = 'AmauiIconMaterialHovFilled';

export default IconMaterialHovFilled;
