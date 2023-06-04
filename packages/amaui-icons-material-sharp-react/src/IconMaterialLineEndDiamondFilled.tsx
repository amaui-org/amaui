import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondFilled'

      short_name='LineEndDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 19-6-6H2v-2h7l6-6 7 7Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondFilled.displayName = 'AmauiIconMaterialLineEndDiamondFilled';

export default IconMaterialLineEndDiamondFilled;
