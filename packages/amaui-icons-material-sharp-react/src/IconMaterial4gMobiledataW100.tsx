import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataW100'

      short_name='4gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.35v-3h-4v-5.7h.7v5h3.3v-5h.7v5h2v.7h-2v3Zm5 0v-8.7h7.7v.7h-7v7.3h6.3v-3.3h-2.5v-.7h3.2v4.7Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataW100.displayName = 'AmauiIconMaterial4gMobiledataW100';

export default IconMaterial4gMobiledataW100;
