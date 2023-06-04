import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewInArNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArNewW100Filled'

      short_name='ViewInArNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19.45-6.35-3.675v-7.4L12 4.7l6.35 3.675v7.4ZM2.3 6V2.3H6V3H3v3ZM6 21.7H2.3V18H3v3h3Zm12-.25v-.7h3v-3h.7v3.7ZM21 6V3h-3v-.7h3.7V6Zm-9 12.65.35-.2v-6.2l5.3-3V8.8l-.35-.2-5.3 3.05L6.7 8.6l-.35.2v.45l5.3 3v6.2Z"/>
    </Icon>
  );
});

IconMaterialViewInArNewW100Filled.displayName = 'AmauiIconMaterialViewInArNewW100Filled';

export default IconMaterialViewInArNewW100Filled;
