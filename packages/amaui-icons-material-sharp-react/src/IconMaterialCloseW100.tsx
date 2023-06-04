import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseW100'

      short_name='Close'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.4 18.1-.5-.5 5.6-5.6-5.6-5.6.5-.5 5.6 5.6 5.6-5.6.5.5-5.6 5.6 5.6 5.6-.5.5-5.6-5.6Z"/>
    </Icon>
  );
});

IconMaterialCloseW100.displayName = 'AmauiIconMaterialCloseW100';

export default IconMaterialCloseW100;
