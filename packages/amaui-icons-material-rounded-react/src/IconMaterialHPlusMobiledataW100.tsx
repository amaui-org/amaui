import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataW100'

      short_name='HPlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 17q-.15 0-.25-.1t-.1-.25v-9.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.3h7.3v-4.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.3H5.5v4.3q0 .15-.1.25t-.25.1Zm13.7-2.65q-.15 0-.25-.1t-.1-.25v-1.65h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.2V14q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataW100.displayName = 'AmauiIconMaterialHPlusMobiledataW100';

export default IconMaterialHPlusMobiledataW100;
