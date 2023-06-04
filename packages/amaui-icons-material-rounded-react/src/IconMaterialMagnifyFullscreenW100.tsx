import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyFullscreenW100'

      short_name='MagnifyFullscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0V336v480Zm426-266v76q0 6 4 10t10 4q6 0 10-4t4-10v-76h76q6 0 10-4t4-10q0-6-4-10t-10-4h-76v-76q0-6-4-10t-10-4q-6 0-10 4t-4 10v76h-76q-6 0-10 4t-4 10q0 6 4 10t10 4h76Z"/>
    </Icon>
  );
});

IconMaterialMagnifyFullscreenW100.displayName = 'AmauiIconMaterialMagnifyFullscreenW100';

export default IconMaterialMagnifyFullscreenW100;
