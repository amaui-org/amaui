import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposurePlus1Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1Sharp'
      short_name='ExposurePlus1'

      {...props}
    >
      <path d="M6 17V14H3V12H6V9H8V12H11V14H8V17ZM15.75 19V8.05L13.45 9.7L12.3 7.95L16.4 5H18V19Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1Sharp.displayName = 'AmauiIconMaterialExposurePlus1Sharp';

export default IconMaterialExposurePlus1Sharp;
