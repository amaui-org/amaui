import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardKeysW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardKeysW100Filled'

      short_name='KeyboardKeys'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-292v-56h376v56H292ZM132-452v-56h56v56h-56Zm160 0v-56h56v56h-56Zm160 0v-56h56v56h-56Zm160 0v-56h56v56h-56Zm160 0v-56h56v56h-56ZM132-612v-56h56v56h-56Zm160 0v-56h56v56h-56Zm160 0v-56h56v56h-56Zm160 0v-56h56v56h-56Zm160 0v-56h56v56h-56Z"/>
    </Icon>
  );
});

IconMaterialKeyboardKeysW100Filled.displayName = 'AmauiIconMaterialKeyboardKeysW100Filled';

export default IconMaterialKeyboardKeysW100Filled;
