import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorW100Filled'

      short_name='NearbyError'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 18v-7.35h.7V18Zm.35 2.25q-.225 0-.362-.137-.138-.138-.138-.363 0-.2.138-.35.137-.15.362-.15.2 0 .35.15.15.15.15.35 0 .225-.15.363-.15.137-.35.137Zm-9 .2L2.75 12l8.45-8.45 5.65 5.6v1.3L11.2 4.8 4 12l7.2 7.2 5.65-5.65v1.3Zm0-5.2L7.95 12l3.25-3.25L14.45 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyErrorW100Filled.displayName = 'AmauiIconMaterialNearbyErrorW100Filled';

export default IconMaterialNearbyErrorW100Filled;
