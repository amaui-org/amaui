import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkatingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingW100Filled'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 21.35v-.7h4v-3.3h-3V3.65h7.1v2.5H8.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.25v.65q0 .1.075.65H8.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.575q.3.575.812.975.513.4 1.163.6l5.05 1.4v5.525h-2.75v3.3H18q1.5 0 2.475-.75.975-.75 1.175-2.25h.7q-.2 1.8-1.375 2.75T18 21.35Zm4.7-.7h7.3v-3.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingW100Filled.displayName = 'AmauiIconMaterialIceSkatingW100Filled';

export default IconMaterialIceSkatingW100Filled;
