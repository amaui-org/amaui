import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardW100Filled'

      short_name='ArrowForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19-.5-.5 6.15-6.15H5v-.7h12.65L11.5 5.5 12 5l7 7Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardW100Filled.displayName = 'AmauiIconMaterialArrowForwardW100Filled';

export default IconMaterialArrowForwardW100Filled;
