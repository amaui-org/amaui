import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardSharpW100Filled'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 19 5 12 5.5 11.5 11.65 17.65V5H12.35V17.65L18.5 11.5L19 12Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardSharpW100Filled.displayName = 'AmauiIconMaterialArrowDownwardSharpW100Filled';

export default IconMaterialArrowDownwardSharpW100Filled;
