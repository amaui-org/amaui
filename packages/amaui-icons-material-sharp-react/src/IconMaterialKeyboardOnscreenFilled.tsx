import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOnscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreenFilled'

      short_name='KeyboardOnscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776h320v-80H320v80ZM200 656h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM80 896V256h800v640H80Zm80-440h640V336H160v120Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreenFilled.displayName = 'AmauiIconMaterialKeyboardOnscreenFilled';

export default IconMaterialKeyboardOnscreenFilled;
