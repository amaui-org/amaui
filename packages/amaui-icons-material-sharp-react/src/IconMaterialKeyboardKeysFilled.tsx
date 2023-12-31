import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardKeysFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardKeysFilled'

      short_name='KeyboardKeys'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-80h400v80H280ZM120-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM120-600v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardKeysFilled.displayName = 'AmauiIconMaterialKeyboardKeysFilled';

export default IconMaterialKeyboardKeysFilled;
