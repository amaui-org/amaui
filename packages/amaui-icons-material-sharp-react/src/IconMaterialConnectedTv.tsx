import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectedTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTv'

      short_name='ConnectedTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16h2q0-.825-.588-1.413Q5.825 14 5 14Zm3.55 0H10q0-2.075-1.463-3.538Q7.075 11 5 11v1.45q1.475 0 2.513 1.038Q8.55 14.525 8.55 16Zm3 0H13q0-1.65-.625-3.113-.625-1.462-1.712-2.55-1.088-1.087-2.55-1.712Q6.65 8 5 8v1.45q2.725 0 4.638 1.912Q11.55 13.275 11.55 16ZM8 21v-2H2V3h20v16h-6v2Zm-4-4h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialConnectedTv.displayName = 'AmauiIconMaterialConnectedTv';

export default IconMaterialConnectedTv;
