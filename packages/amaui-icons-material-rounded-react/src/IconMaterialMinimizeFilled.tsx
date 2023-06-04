import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinimizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeFilled'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.975 21q-.425 0-.7-.288Q6 20.425 6 20t.287-.712Q6.575 19 7 19h10.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialMinimizeFilled.displayName = 'AmauiIconMaterialMinimizeFilled';

export default IconMaterialMinimizeFilled;
