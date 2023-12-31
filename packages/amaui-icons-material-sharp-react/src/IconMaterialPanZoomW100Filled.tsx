import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanZoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanZoomW100Filled'

      short_name='PanZoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188h28v140l150-150 20 20-150 150h140v28H172Zm438-418-20-20 150-150H600v-28h188v188h-28v-140L610-590Z"/>
    </Icon>
  );
});

IconMaterialPanZoomW100Filled.displayName = 'AmauiIconMaterialPanZoomW100Filled';

export default IconMaterialPanZoomW100Filled;
