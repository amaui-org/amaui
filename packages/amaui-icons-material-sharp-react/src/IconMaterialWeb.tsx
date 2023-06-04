import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeb = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Web'

      short_name='Web'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-7.5h10.5V9H4ZM4 18h10.5v-3.5H4Zm12.5 0H20V9h-3.5Z"/>
    </Icon>
  );
});

IconMaterialWeb.displayName = 'AmauiIconMaterialWeb';

export default IconMaterialWeb;
