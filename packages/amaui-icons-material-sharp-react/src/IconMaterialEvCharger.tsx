import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvCharger = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvCharger'

      short_name='EvCharger'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.5 19 2.5-4H9.5v-3L7 16h1.5ZM6 10h6V5H6Zm0 9h6v-7H6Zm-2 2V3h10v9h3v7.5h2.25V9H18V6h.5V4.5h1V6h1V4.5h1V6h.5v3h-1.25v12H15.5v-7.5H14V21Zm8-2H6h6Z"/>
    </Icon>
  );
});

IconMaterialEvCharger.displayName = 'AmauiIconMaterialEvCharger';

export default IconMaterialEvCharger;
