import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurroundSound = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSound'

      short_name='SurroundSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm4.95 1.95q.95-.95 1.5-2.212Q19 13.475 19 12t-.55-2.738Q17.9 8 16.95 7.05l-1.4 1.4q.675.675 1.063 1.587Q17 10.95 17 12t-.387 1.962q-.388.913-1.063 1.588Zm-9.9 0 1.4-1.4q-.675-.675-1.062-1.588Q7 13.05 7 12q0-1.05.388-1.963.387-.912 1.062-1.587l-1.4-1.4Q6.1 8 5.55 9.262 5 10.525 5 12t.55 2.738Q6.1 16 7.05 16.95ZM2 20V4h20v16Zm2-2V6Zm0 0h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialSurroundSound.displayName = 'AmauiIconMaterialSurroundSound';

export default IconMaterialSurroundSound;
