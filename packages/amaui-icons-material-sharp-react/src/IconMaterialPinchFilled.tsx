import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchFilled'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 11V6h1.5v2.45L8.45 2.5H6V1h5v5H9.5V3.55L3.55 9.5H6V11Zm12.25 12-5.125-5.375 1.2-1.25 3.8.875V6.5q0-.625.437-1.062Q14 5 14.625 5t1.063.438q.437.437.437 1.062v6h1.4l5.775 2.9-1.075 7.6Z"/>
    </Icon>
  );
});

IconMaterialPinchFilled.displayName = 'AmauiIconMaterialPinchFilled';

export default IconMaterialPinchFilled;
