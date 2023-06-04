import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAll'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm16-2v-6h-6v6Zm0-14h-6v6h6ZM5 5v6h6V5Zm0 14h6v-6H5Z"/>
    </Icon>
  );
});

IconMaterialBorderAll.displayName = 'AmauiIconMaterialBorderAll';

export default IconMaterialBorderAll;
