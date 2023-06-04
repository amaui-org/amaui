import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondFilled'

      short_name='LineStartDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 19-7-7 7-7 6 6h7v2h-7Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondFilled.displayName = 'AmauiIconMaterialLineStartDiamondFilled';

export default IconMaterialLineStartDiamondFilled;
