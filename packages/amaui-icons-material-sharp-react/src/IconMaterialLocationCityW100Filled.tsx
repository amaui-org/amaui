import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationCityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityW100Filled'

      short_name='LocationCity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.9V7.2h4V3.55L12 1.35l2.35 2.2v7.65h4v8.7Zm.7-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm4 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Z"/>
    </Icon>
  );
});

IconMaterialLocationCityW100Filled.displayName = 'AmauiIconMaterialLocationCityW100Filled';

export default IconMaterialLocationCityW100Filled;
