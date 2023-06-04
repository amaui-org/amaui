import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRightW100'

      short_name='RampRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.35v-8.025q-.65 1.525-1.975 2.95Q8.35 16.7 6.55 17.9l-.5-.5q.825-.525 1.8-1.338.975-.812 1.825-1.862t1.413-2.363q.562-1.312.562-2.837V5.275L9.4 7.525l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25V20.35Z"/>
    </Icon>
  );
});

IconMaterialRampRightW100.displayName = 'AmauiIconMaterialRampRightW100';

export default IconMaterialRampRightW100;
