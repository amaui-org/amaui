import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFullW100Filled'

      short_name='KeyboardFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm28-188h640V336H160v320Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFullW100Filled.displayName = 'AmauiIconMaterialKeyboardFullW100Filled';

export default IconMaterialKeyboardFullW100Filled;
