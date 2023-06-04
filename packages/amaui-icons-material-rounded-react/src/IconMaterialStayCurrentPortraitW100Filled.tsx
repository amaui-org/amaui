import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitW100Filled'

      short_name='StayCurrentPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18.65h10V5.35H7Zm.8 3.05q-.65 0-1.075-.425Q6.3 20.85 6.3 20.2V3.8q0-.65.425-1.075Q7.15 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitW100Filled.displayName = 'AmauiIconMaterialStayCurrentPortraitW100Filled';

export default IconMaterialStayCurrentPortraitW100Filled;
