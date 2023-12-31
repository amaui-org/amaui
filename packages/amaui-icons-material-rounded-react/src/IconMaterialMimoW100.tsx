import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoW100'

      short_name='Mimo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-256q-26 0-43-17t-17-43v-412q0-26 17-43t43-17h576q26 0 43 17t17 43v412q0 26-17 43t-43 17H630l19 19q5 5 7 10t2 11v14q0 13-8.5 21.5T628-172H332q-13 0-21.5-8.5T302-202v-14q0-6 2-11t7-10l19-19H192Zm0-28h576q12 0 22-10t10-22v-412q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v412q0 12 10 22t22 10Zm-32 0v-476 476Z"/>
    </Icon>
  );
});

IconMaterialMimoW100.displayName = 'AmauiIconMaterialMimoW100';

export default IconMaterialMimoW100;
