import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1'

      short_name='ExposureNeg1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 14H3v-2h7Zm5.75 5V8.05l-2.3 1.65-1.15-1.75L16.4 5H18v14Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1.displayName = 'AmauiIconMaterialExposureNeg1';

export default IconMaterialExposureNeg1;
