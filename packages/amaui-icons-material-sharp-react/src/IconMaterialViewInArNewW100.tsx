import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewInArNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArNewW100'

      short_name='ViewInArNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19.45-6.35-3.675v-7.4L12 4.7l6.35 3.675v7.4Zm-.35-1v-6.2l-5.3-3v6.1Zm.7 0 5.3-3.1v-6.1l-5.3 3ZM2.3 6V2.3H6V3H3v3ZM6 21.7H2.3V18H3v3h3Zm12-.25v-.7h3v-3h.7v3.7ZM21 6V3h-3v-.7h3.7V6Zm-9 5.65 5.3-3.05L12 5.55 6.7 8.6Zm0 .6Zm0-.6Zm.35.6Zm-.7 0Z"/>
    </Icon>
  );
});

IconMaterialViewInArNewW100.displayName = 'AmauiIconMaterialViewInArNewW100';

export default IconMaterialViewInArNewW100;
