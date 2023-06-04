import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltW100'

      short_name='ArrowRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.125 17.1-.5-.5 4.25-4.25h-13.1v-.7h13.1l-4.25-4.25.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltW100.displayName = 'AmauiIconMaterialArrowRightAltW100';

export default IconMaterialArrowRightAltW100;
