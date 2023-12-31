import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialogsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialogsW100Filled'

      short_name='Dialogs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-372h216v-216H372v216ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDialogsW100Filled.displayName = 'AmauiIconMaterialDialogsW100Filled';

export default IconMaterialDialogsW100Filled;
