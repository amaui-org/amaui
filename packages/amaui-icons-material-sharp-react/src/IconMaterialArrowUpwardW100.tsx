import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardW100'

      short_name='ArrowUpward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19V6.35L5.5 12.5 5 12l7-7 7 7-.5.5-6.15-6.15V19Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardW100.displayName = 'AmauiIconMaterialArrowUpwardW100';

export default IconMaterialArrowUpwardW100;
