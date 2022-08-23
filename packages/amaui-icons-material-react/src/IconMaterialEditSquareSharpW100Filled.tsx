import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareSharpW100Filled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M4.3 22.4V7h9.425L7.8 12.95v5.95h5.95l5.95-5.925V22.4Zm6-6v-2.425l6.55-6.55L19.3 9.8l-6.575 6.6Zm10-7.6-2.45-2.375 2.2-2.2 2.525 2.3Z"/>
    </Icon>
  );
});

IconMaterialEditSquareSharpW100Filled.displayName = 'AmauiIconMaterialEditSquareSharpW100Filled';

export default IconMaterialEditSquareSharpW100Filled;
