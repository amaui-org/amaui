import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHovW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HovW100'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 292-481l188-347 188 347-188 349Zm0-59 156-290-156-288-156 288 156 290Zm0-289Z"/>
    </Icon>
  );
});

IconMaterialHovW100.displayName = 'AmauiIconMaterialHovW100';

export default IconMaterialHovW100;
