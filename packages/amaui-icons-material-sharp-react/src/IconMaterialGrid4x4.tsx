import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid4x4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4'

      short_name='Grid4x4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22v-3H2v-2h3v-4H2v-2h3V7H2V5h3V2h2v3h4V2h2v3h4V2h2v3h3v2h-3v4h3v2h-3v4h3v2h-3v3h-2v-3h-4v3h-2v-3H7v3Zm2-5h4v-4H7Zm6 0h4v-4h-4Zm-6-6h4V7H7Zm6 0h4V7h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4.displayName = 'AmauiIconMaterialGrid4x4';

export default IconMaterialGrid4x4;
