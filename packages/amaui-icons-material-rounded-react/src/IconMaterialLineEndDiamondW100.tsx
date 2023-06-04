import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondW100'

      short_name='LineEndDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 15.1 3.1-3.1L15 8.9 11.9 12Zm0 1-3.75-3.75H3.4v-.7h7.85L15 7.9l4.1 4.1Zm0-4.1Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondW100.displayName = 'AmauiIconMaterialLineEndDiamondW100';

export default IconMaterialLineEndDiamondW100;
