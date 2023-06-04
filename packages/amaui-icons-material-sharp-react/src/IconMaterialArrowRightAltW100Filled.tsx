import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltW100Filled'

      short_name='ArrowRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.125 17.1-.5-.5 4.25-4.25h-13.1v-.7h13.1l-4.25-4.25.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltW100Filled.displayName = 'AmauiIconMaterialArrowRightAltW100Filled';

export default IconMaterialArrowRightAltW100Filled;
