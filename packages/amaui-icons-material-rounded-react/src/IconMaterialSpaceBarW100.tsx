import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarW100'

      short_name='SpaceBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 13.7q-.325 0-.537-.213-.213-.212-.213-.537v-3.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V13h12V9.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarW100.displayName = 'AmauiIconMaterialSpaceBarW100';

export default IconMaterialSpaceBarW100;
