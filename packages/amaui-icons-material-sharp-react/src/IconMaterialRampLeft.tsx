import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeft'

      short_name='RampLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21V6.825L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.825V9q0 1.6.663 2.938.662 1.337 1.599 2.374.938 1.038 1.963 1.788 1.025.75 1.775 1.175l-1.45 1.45q-1.425-.875-2.575-1.888Q13.825 15.825 13 14.7V21Z"/>
    </Icon>
  );
});

IconMaterialRampLeft.displayName = 'AmauiIconMaterialRampLeft';

export default IconMaterialRampLeft;
