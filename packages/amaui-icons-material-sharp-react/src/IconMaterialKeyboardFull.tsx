import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFull'

      short_name='KeyboardFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm80-240h640V336H160v320Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFull.displayName = 'AmauiIconMaterialKeyboardFull';

export default IconMaterialKeyboardFull;
