import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolbarW100Filled'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-380h616v380q0 26-17 43t-43 17H232Zm-60-468v-88q0-26 17-43t43-17h496q26 0 43 17t17 43v88H172Z"/>
    </Icon>
  );
});

IconMaterialToolbarW100Filled.displayName = 'AmauiIconMaterialToolbarW100Filled';

export default IconMaterialToolbarW100Filled;
