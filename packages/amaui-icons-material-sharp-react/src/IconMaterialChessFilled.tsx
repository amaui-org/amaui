import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessFilled'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-240h132l22-160H160v-80h640v80H686l22 160h132v240H120Zm138-540-58-260q33 25 68 47t77 22q40 0 73.5-20.5T480-880q28 28 61.5 48.5T615-811q42 0 77-22t68-47l-57 260H258Z"/>
    </Icon>
  );
});

IconMaterialChessFilled.displayName = 'AmauiIconMaterialChessFilled';

export default IconMaterialChessFilled;
