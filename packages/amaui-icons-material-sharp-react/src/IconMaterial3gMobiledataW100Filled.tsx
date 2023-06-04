import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataW100Filled'

      short_name='3gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 16.35v-.7h5v-3.3h-5v-.7h5v-3.3h-5v-.7h5.7v8.7Zm9 0v-8.7h7.7v.7h-7v7.3h6.3v-3.3h-2.5v-.7h3.2v4.7Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataW100Filled.displayName = 'AmauiIconMaterial3gMobiledataW100Filled';

export default IconMaterial3gMobiledataW100Filled;
