import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposurePlus1SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1SharpW100'
      short_name='ExposurePlus1'

      {...props}
    >
      <path d="M6.65 16.2V13.2H3.65V12.5H6.65V9.5H7.35V12.5H10.35V13.2H7.35V16.2ZM16.5 17.65V7.3L13.9 9.1L13.5 8.55L16.65 6.35H17.2V17.65Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1SharpW100.displayName = 'AmauiIconMaterialExposurePlus1SharpW100';

export default IconMaterialExposurePlus1SharpW100;
