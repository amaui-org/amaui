import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAod = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Aod'

      short_name='Aod'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11.5V10h8v1.5Zm1 3V13h6v1.5ZM5 23V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAod.displayName = 'AmauiIconMaterialAod';

export default IconMaterialAod;
