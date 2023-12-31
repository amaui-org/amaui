import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdW100'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-400H200v400q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialAdW100.displayName = 'AmauiIconMaterialAdW100';

export default IconMaterialAdW100;
