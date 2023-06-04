import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartW100Filled'

      short_name='LineStart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 13.85q-.775 0-1.312-.538Q2.65 12.775 2.65 12t.538-1.312q.537-.538 1.312-.538.675 0 1.188.425.512.425.637 1.075H21.35v.7H6.325q-.125.65-.637 1.075-.513.425-1.188.425Z"/>
    </Icon>
  );
});

IconMaterialLineStartW100Filled.displayName = 'AmauiIconMaterialLineStartW100Filled';

export default IconMaterialLineStartW100Filled;
