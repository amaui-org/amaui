import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1W100Filled'

      short_name='ExposureNeg1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 13.2h-5.7v-.7h5.7Zm7.15 4.45V7.3l-2.6 1.8-.4-.55 3.15-2.2h.55v11.3Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1W100Filled.displayName = 'AmauiIconMaterialExposureNeg1W100Filled';

export default IconMaterialExposureNeg1W100Filled;
