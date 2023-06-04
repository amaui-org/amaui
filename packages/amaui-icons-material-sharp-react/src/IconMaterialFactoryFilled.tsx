import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryFilled'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V10l7-3v2l5-2v3h8v12Zm9-4h2v-4h-2Zm-4 0h2v-4H7Zm8 0h2v-4h-2Zm6.8-9.5h-4.625L18 2h3Z"/>
    </Icon>
  );
});

IconMaterialFactoryFilled.displayName = 'AmauiIconMaterialFactoryFilled';

export default IconMaterialFactoryFilled;
