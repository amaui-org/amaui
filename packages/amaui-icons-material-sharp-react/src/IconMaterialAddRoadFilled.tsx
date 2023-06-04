import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadFilled'

      short_name='AddRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3Zm0-10V4h2v9ZM4 20V4h2v16Zm7-12V4h2v4Zm0 6v-4h2v4Zm0 6v-4h2v4Z"/>
    </Icon>
  );
});

IconMaterialAddRoadFilled.displayName = 'AmauiIconMaterialAddRoadFilled';

export default IconMaterialAddRoadFilled;
