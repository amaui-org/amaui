import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationCity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCity'

      short_name='LocationCity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V7h6V5l3-3 3 3v6h6v10Zm2-2h2v-2H5Zm0-4h2v-2H5Zm0-4h2V9H5Zm6 8h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V9h-2Zm0-4h2V5h-2Zm6 12h2v-2h-2Zm0-4h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialLocationCity.displayName = 'AmauiIconMaterialLocationCity';

export default IconMaterialLocationCity;
