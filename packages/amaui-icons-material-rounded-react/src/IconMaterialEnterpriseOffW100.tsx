import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterpriseOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseOffW100'

      short_name='EnterpriseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m836-84-88-88H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h100l28 28H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10h528L124-796l20-20 712 712-20 20Zm-8-156-28-28v-340q0-12-10-22t-22-10H428l-56-56v-20q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v368ZM400-668h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm214 214Zm-114 34Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseOffW100.displayName = 'AmauiIconMaterialEnterpriseOffW100';

export default IconMaterialEnterpriseOffW100;
