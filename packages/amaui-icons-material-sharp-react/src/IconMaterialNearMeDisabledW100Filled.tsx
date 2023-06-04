import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100Filled'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 18.85-2.3-5.8-5.8-2.35-.05-.4 5.15-1.95-5.625-5.625.5-.5 16.7 16.7-.5.5-5.7-5.7L13.6 18.85Zm3.45-7.875L12.95 7.3l6-2.3Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100Filled.displayName = 'AmauiIconMaterialNearMeDisabledW100Filled';

export default IconMaterialNearMeDisabledW100Filled;
