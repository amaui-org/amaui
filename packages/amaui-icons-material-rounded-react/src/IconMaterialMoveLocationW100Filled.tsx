import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationW100Filled'

      short_name='MoveLocation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M838 790H649q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h189l-79-80q-2.182-2.057-3.091-4.457-.909-2.4-.909-4.972 0-2.571 1.053-5.149 1.052-2.578 3.158-4.641Q763.07 659 769.035 659t9.965 4l92 92q9 9 9 21t-9 21l-92 92q-4 3.667-10 3.833-6 .167-10.174-3.833-2.087-2-2.956-4.333-.87-2.334-.87-5 0-2.667.909-5.117T759 870l79-80ZM362 670q42 0 77.5-18.5T499 602q-30-20-64.301-30t-72.5-10Q324 562 289.5 572T225 602q24 31 59.5 49.5T362 670Zm0-200q23 0 38.5-15.5T416 416q0-23-15.5-38.5T362 362q-23 0-38.5 15.5T308 416q0 23 15.5 38.5T362 470Zm-.25 474q-5.75 0-10.75-1.5t-10-5.5Q203 809 135.5 699.5T68 504q0-138.11 89-220.055T362 202q116 0 205 81.945T656 504q0 86-67.5 195.5T383 937q-4 4-9.75 5.5t-11.5 1.5Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100Filled.displayName = 'AmauiIconMaterialMoveLocationW100Filled';

export default IconMaterialMoveLocationW100Filled;
