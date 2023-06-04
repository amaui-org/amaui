import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondFilled'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 8.25 11.85 3h.3l2.65 5.25Zm2.05 11.85L2.625 9.75h8.625Zm1.5 0V9.75h8.625Zm3.7-11.85L13.85 3H19l2.625 5.25Zm-14.075 0L5 3h5.15l-2.6 5.25Z"/>
    </Icon>
  );
});

IconMaterialDiamondFilled.displayName = 'AmauiIconMaterialDiamondFilled';

export default IconMaterialDiamondFilled;
