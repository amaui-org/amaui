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
      <path d="M402-372h156q13 0 21.5-8.5T588-402v-156q0-13-8.5-21.5T558-588H402q-13 0-21.5 8.5T372-558v156q0 13 8.5 21.5T402-372ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialDialogsW100Filled.displayName = 'AmauiIconMaterialDialogsW100Filled';

export default IconMaterialDialogsW100Filled;
