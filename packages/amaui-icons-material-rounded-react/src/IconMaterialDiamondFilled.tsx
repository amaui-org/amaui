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
      <path d="M9.2 8.25 11.85 3h.3l2.65 5.25Zm2.05 11.85L2.625 9.75h8.625Zm1.5 0V9.75h8.625Zm3.7-11.85L13.85 3h3.925q.575 0 1.037.3.463.3.738.8l2.075 4.15Zm-14.075 0L4.45 4.1q.275-.5.738-.8Q5.65 3 6.225 3h3.925l-2.6 5.25Z"/>
    </Icon>
  );
});

IconMaterialDiamondFilled.displayName = 'AmauiIconMaterialDiamondFilled';

export default IconMaterialDiamondFilled;
