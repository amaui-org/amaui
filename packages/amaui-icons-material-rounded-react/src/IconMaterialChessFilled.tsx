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
      <path d="M160-80q-17 0-28.5-11.5T120-120v-120q0-33 23.5-56.5T200-320h52l22-160h-74q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560h560q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480h-74l22 160h52q33 0 56.5 23.5T840-240v120q0 17-11.5 28.5T800-80H160Zm98-540-58-260q33 25 68 47t77 22q40 0 73.5-20.5T480-880q28 28 61.5 48.5T615-811q42 0 77-22t68-47l-57 260H258Z"/>
    </Icon>
  );
});

IconMaterialChessFilled.displayName = 'AmauiIconMaterialChessFilled';

export default IconMaterialChessFilled;
