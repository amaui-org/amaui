import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Factory'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V9.975L9 7v2l5-2v3h8v12Zm2-2h16v-8h-8V9.95l-5 2V10l-3 1.325Zm7-2h2v-4h-2Zm-4 0h2v-4H7Zm8 0h2v-4h-2Zm7-8h-5l1-8h3ZM4 20h16Z"/>
    </Icon>
  );
});

IconMaterialFactory.displayName = 'AmauiIconMaterialFactory';

export default IconMaterialFactory;
