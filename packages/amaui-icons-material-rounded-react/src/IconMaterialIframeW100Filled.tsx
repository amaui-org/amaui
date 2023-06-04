import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100Filled'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M430 696q-13 0-21.5-8.5T400 666V526q0-13 8.5-21.5T430 496h260q13 0 21.5 8.5T720 526v140q0 13-8.5 21.5T690 696H430ZM192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22V416H160v368q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialIframeW100Filled.displayName = 'AmauiIconMaterialIframeW100Filled';

export default IconMaterialIframeW100Filled;
