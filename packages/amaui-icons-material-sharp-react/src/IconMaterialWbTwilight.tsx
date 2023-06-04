import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbTwilight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilight'

      short_name='WbTwilight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.35 10.1-1.4-1.45 2.15-2.1 1.4 1.4ZM2 20v-2h20v2Zm9-13V4h2v3Zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65ZM5 16q0-2.925 2.038-4.963Q9.075 9 12 9t4.962 2.037Q19 13.075 19 16Z"/>
    </Icon>
  );
});

IconMaterialWbTwilight.displayName = 'AmauiIconMaterialWbTwilight';

export default IconMaterialWbTwilight;
