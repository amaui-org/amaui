import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltFilled'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.2 21-5.125-5.375 1.2-1.25 3.8.875V4.5q0-.625.438-1.062Q10.95 3 11.575 3t1.063.438q.437.437.437 1.062v6h1.4l5.775 2.9-1.075 7.6Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltFilled.displayName = 'AmauiIconMaterialPanToolAltFilled';

export default IconMaterialPanToolAltFilled;
