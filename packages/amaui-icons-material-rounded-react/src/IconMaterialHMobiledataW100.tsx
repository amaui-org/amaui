import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataW100'

      short_name='HMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.15 0-.25-.1t-.1-.25v-9.3q0-.15.1-.25T8 7q.15 0 .25.1t.1.25v4.3h7.3v-4.3q0-.15.1-.25T16 7q.15 0 .25.1t.1.25v9.3q0 .15-.1.25T16 17q-.15 0-.25-.1t-.1-.25v-4.3h-7.3v4.3q0 .15-.1.25T8 17Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataW100.displayName = 'AmauiIconMaterialHMobiledataW100';

export default IconMaterialHMobiledataW100;
