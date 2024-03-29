import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadFilled'

      short_name='EditRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 13.05V4h2v7.05ZM4 20V4h2v16Zm6-12V4h2v4Zm0 6v-4h2v4Zm0 6v-4h2v4Zm12.125-6L20 11.875l1.425-1.425 2.125 2.125ZM14 20v-2.125l5.3-5.3 2.125 2.125-5.3 5.3Z"/>
    </Icon>
  );
});

IconMaterialEditRoadFilled.displayName = 'AmauiIconMaterialEditRoadFilled';

export default IconMaterialEditRoadFilled;
