import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataArray = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArray'

      short_name='DataArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4"/><polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4"/></g></g>
    </Icon>
  );
});

IconMaterialDataArray.displayName = 'AmauiIconMaterialDataArray';

export default IconMaterialDataArray;
