import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxW100Filled'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-498l98-118h419l99 120v496H172Zm43-506h529l-69-82H284l-69 82Zm157 285 108-54 108 54v-257H372v257Z"/>
    </Icon>
  );
});

IconMaterialBoxW100Filled.displayName = 'AmauiIconMaterialBoxW100Filled';

export default IconMaterialBoxW100Filled;
