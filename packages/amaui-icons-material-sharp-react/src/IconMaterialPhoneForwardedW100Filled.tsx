import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneForwardedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwardedW100Filled'

      short_name='PhoneForwarded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.7 9.3-.5-.5 2.25-2.25h-6.1v-.7h6.1L17.2 3.6l.5-.5 3.1 3.1Zm.925 10.25q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwardedW100Filled.displayName = 'AmauiIconMaterialPhoneForwardedW100Filled';

export default IconMaterialPhoneForwardedW100Filled;
