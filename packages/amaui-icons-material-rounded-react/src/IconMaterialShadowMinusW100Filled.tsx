import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowMinusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowMinusW100Filled'

      short_name='ShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h80v-100q0-26 17-43t43-17h436q26 0 43 17t17 43v436q0 26-17 43t-43 17H668v80q0 26-17 43t-43 17H192Zm140-168h436q12 0 22-10t10-22v-436q0-12-10-22t-22-10H332q-12 0-22 10t-10 22v436q0 12 10 22t22 10Zm108-246q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H440Z"/>
    </Icon>
  );
});

IconMaterialShadowMinusW100Filled.displayName = 'AmauiIconMaterialShadowMinusW100Filled';

export default IconMaterialShadowMinusW100Filled;
