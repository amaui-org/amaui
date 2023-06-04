import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolylineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineFilled'

      short_name='Polyline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 22v-2.5L8 16H3v-6h4.3L10 6.9V2h6v6h-4.3L9 11.1v3.15l6 3V16h6v6Z"/>
    </Icon>
  );
});

IconMaterialPolylineFilled.displayName = 'AmauiIconMaterialPolylineFilled';

export default IconMaterialPolylineFilled;
