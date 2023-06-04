import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetailsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsW100Filled'

      short_name='Details'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.2 19.7 12 5.675 19.8 19.7Zm1.2-.7h6.25V7.75Zm6.95 0h6.25L12.35 7.75Z"/>
    </Icon>
  );
});

IconMaterialDetailsW100Filled.displayName = 'AmauiIconMaterialDetailsW100Filled';

export default IconMaterialDetailsW100Filled;
