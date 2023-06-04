import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpW100'

      short_name='MoreUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 15.4V6.35H9.3v-.7h9.05v9.75Zm-5 5v-9.05H4.3v-.7h9.05v9.75Z"/>
    </Icon>
  );
});

IconMaterialMoreUpW100.displayName = 'AmauiIconMaterialMoreUpW100';

export default IconMaterialMoreUpW100;
