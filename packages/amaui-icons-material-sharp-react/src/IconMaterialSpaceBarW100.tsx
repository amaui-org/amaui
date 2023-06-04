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
      <path d="M5.3 13.7V9H6v4h12V9h.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarW100.displayName = 'AmauiIconMaterialSpaceBarW100';

export default IconMaterialSpaceBarW100;
