import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowW100Filled'

      short_name='LineStartArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.45 16.175 4.875 12l6.575-4.175v3.825h9.15v.7h-9.15Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowW100Filled.displayName = 'AmauiIconMaterialLineStartArrowW100Filled';

export default IconMaterialLineStartArrowW100Filled;
