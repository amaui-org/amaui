import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAlt'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13v7h-4v-7L2.95 4h18.1Zm-2-.7L16.95 6h-9.9Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAlt.displayName = 'AmauiIconMaterialFilterAlt';

export default IconMaterialFilterAlt;
