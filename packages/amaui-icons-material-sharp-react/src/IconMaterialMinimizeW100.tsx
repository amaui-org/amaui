import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinimizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeW100'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 20.35v-.7h10.7v.7Z"/>
    </Icon>
  );
});

IconMaterialMinimizeW100.displayName = 'AmauiIconMaterialMinimizeW100';

export default IconMaterialMinimizeW100;
