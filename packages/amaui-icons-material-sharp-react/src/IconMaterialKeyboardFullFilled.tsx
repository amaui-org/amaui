import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFullFilled'

      short_name='KeyboardFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm80-240h640V336H160v320Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFullFilled.displayName = 'AmauiIconMaterialKeyboardFullFilled';

export default IconMaterialKeyboardFullFilled;
