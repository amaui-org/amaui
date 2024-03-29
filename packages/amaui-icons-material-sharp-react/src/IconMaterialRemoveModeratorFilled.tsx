import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorFilled'

      short_name='RemoveModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.85 16.05 6.8 3.95 12 2l8 3v6.1q0 1.275-.288 2.525-.287 1.25-.862 2.425Zm.95 6.55-3.25-3.25q-.95.975-2.112 1.637Q13.275 21.65 12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V6.8L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorFilled.displayName = 'AmauiIconMaterialRemoveModeratorFilled';

export default IconMaterialRemoveModeratorFilled;
