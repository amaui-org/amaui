import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfSharpW100Filled'
      short_name='StarHalf'

      {...props}
    >
      <path d="M12 8.9V14.8L14.4 16.65L13.5 13.6L15.75 12H12.95ZM8.25 18.55 9.65 13.9 6.05 11.3H10.55L12 6.5L13.45 11.3H17.95L14.35 13.9L15.75 18.55L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarHalfSharpW100Filled.displayName = 'AmauiIconMaterialStarHalfSharpW100Filled';

export default IconMaterialStarHalfSharpW100Filled;
