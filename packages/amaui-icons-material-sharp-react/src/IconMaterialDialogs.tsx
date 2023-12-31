import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialogs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dialogs'

      short_name='Dialogs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h320v-320H320v320ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDialogs.displayName = 'AmauiIconMaterialDialogs';

export default IconMaterialDialogs;
