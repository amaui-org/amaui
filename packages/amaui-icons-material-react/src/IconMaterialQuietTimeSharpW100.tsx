import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeSharpW100'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 21.7q-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-2.7 1.487-4.913 1.488-2.212 3.988-3.212 0 2.3.85 4.4.85 2.1 2.475 3.725t3.725 2.475q2.1.85 4.4.85-1 2.5-3.212 3.987Q15.8 21.7 13.1 21.7Zm0-.7q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.1-1.925-.9-3.45-2.425-1.525-1.525-2.425-3.438Q9.275 8 9.1 5.85 7.175 6.925 6.088 8.812 5 10.7 5 12.9q0 3.375 2.363 5.737Q9.725 21 13.1 21Zm-.5-7.65Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeSharpW100.displayName = 'AmauiIconMaterialQuietTimeSharpW100';

export default IconMaterialQuietTimeSharpW100;
