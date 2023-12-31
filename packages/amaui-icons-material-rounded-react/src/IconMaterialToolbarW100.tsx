import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolbarW100'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-468h560v-88q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v88Zm560 28H200v380q0 12 10 22t22 10h496q12 0 22-10t10-22v-380Zm-560-28v28-28Zm0 0v-120 120Zm0 28v412-412Z"/>
    </Icon>
  );
});

IconMaterialToolbarW100.displayName = 'AmauiIconMaterialToolbarW100';

export default IconMaterialToolbarW100;
