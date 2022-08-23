import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataArrayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayTwoTone'
      short_name='DataArray'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4"/><polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4"/></g></g>
    </Icon>
  );
});

IconMaterialDataArrayTwoTone.displayName = 'AmauiIconMaterialDataArrayTwoTone';

export default IconMaterialDataArrayTwoTone;
