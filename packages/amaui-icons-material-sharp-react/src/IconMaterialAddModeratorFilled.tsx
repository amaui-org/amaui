import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModeratorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorFilled'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm-.5-2h1v-2.5H20v-1h-2.5V14h-1v2.5H14v1h2.5ZM12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v5.675q-.65-.325-1.462-.5Q17.725 10 17 10q-2.9 0-4.95 2.05Q10 14.1 10 17q0 1.55.588 2.8.587 1.25 1.487 2.175-.025 0-.037.013Q12.025 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorFilled.displayName = 'AmauiIconMaterialAddModeratorFilled';

export default IconMaterialAddModeratorFilled;
