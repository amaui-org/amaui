import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastW100Filled'

      short_name='East'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.075 17.925q-.125-.1-.137-.237-.013-.138.112-.263l5.075-5.075H3.375q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h15.75L14.05 6.575q-.1-.1-.112-.25-.013-.15.112-.25.1-.1.25-.1t.25.1l5.4 5.4q.125.125.163.25.037.125.037.275 0 .15-.037.287-.038.138-.163.263l-5.4 5.375q-.1.1-.225.1t-.25-.1Z"/>
    </Icon>
  );
});

IconMaterialEastW100Filled.displayName = 'AmauiIconMaterialEastW100Filled';

export default IconMaterialEastW100Filled;
