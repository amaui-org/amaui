import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoadW100Filled'

      short_name='Road'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-536h28v536h-28Zm254 0v-112h28v112h-28Zm254 0v-536h28v536h-28ZM466-424v-112h28v112h-28Zm0-212v-112h28v112h-28Z"/>
    </Icon>
  );
});

IconMaterialRoadW100Filled.displayName = 'AmauiIconMaterialRoadW100Filled';

export default IconMaterialRoadW100Filled;
