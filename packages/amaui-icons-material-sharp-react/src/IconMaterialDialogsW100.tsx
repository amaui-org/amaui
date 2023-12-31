import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialogsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialogsW100'

      short_name='Dialogs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-372h216v-216H372v216ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDialogsW100.displayName = 'AmauiIconMaterialDialogsW100';

export default IconMaterialDialogsW100;
