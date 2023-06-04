import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkW100Filled'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.7v-8.05L8 7.6l5.7 4.05v8.05H9.8v-4.8H6.2v4.8Zm15-11h1.4V7.3h-1.4Zm0 4h1.4v-1.4h-1.4Zm0 4h1.4v-1.4h-1.4Zm-1.6 3v-9.075L10.5 6.9V4.3h11.2v15.4Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkW100Filled.displayName = 'AmauiIconMaterialHomeWorkW100Filled';

export default IconMaterialHomeWorkW100Filled;
