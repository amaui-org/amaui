import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileFriendly = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendly'

      short_name='MobileFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 16-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM6 21h10v-1H6ZM6 4h10V3H6ZM4 23V1h14v6h-2V6H6v12h10v-1h2v6ZM6 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendly.displayName = 'AmauiIconMaterialMobileFriendly';

export default IconMaterialMobileFriendly;
