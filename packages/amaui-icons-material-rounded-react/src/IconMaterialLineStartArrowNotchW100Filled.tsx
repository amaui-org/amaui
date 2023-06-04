import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrowNotchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotchW100Filled'

      short_name='LineStartArrowNotch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.45 16.175 4.875 12l6.575-4.175-2.1 3.825h12v.7h-12Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotchW100Filled.displayName = 'AmauiIconMaterialLineStartArrowNotchW100Filled';

export default IconMaterialLineStartArrowNotchW100Filled;
