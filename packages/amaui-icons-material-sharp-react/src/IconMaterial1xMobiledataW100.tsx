import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataW100'

      short_name='1xMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.35v-8h-2v-.7h2.7v8.7Zm4.85 0 2.75-4.65-2.45-4.05h.85L14.7 11l2-3.35h.8l-2.4 4.05 2.75 4.65H17l-2.35-3.95-2.35 3.95Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataW100.displayName = 'AmauiIconMaterial1xMobiledataW100';

export default IconMaterial1xMobiledataW100;
