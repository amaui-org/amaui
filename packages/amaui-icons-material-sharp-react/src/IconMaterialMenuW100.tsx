import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuW100'

      short_name='Menu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 17.05v-.7h16.7v.7Zm0-4.7v-.7h16.7v.7Zm0-4.7v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialMenuW100.displayName = 'AmauiIconMaterialMenuW100';

export default IconMaterialMenuW100;
