import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveUpW100Filled'

      short_name='TextSelectMoveUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M774 884H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h588q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 880q-4.025 4-9.975 4ZM466 467l-80 79q-4 4-9.5 4.5t-10.717-4.717Q361 541 361 536q0-5 5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5t-4.717 10.717Q589 551 584 550.5q-5-.5-10-4.5l-80-79v269q0 5.95-4.035 9.975-4.035 4.025-10 4.025T470 745.975q-4-4.025-4-9.975V467Zm308-171H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h588q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 292q-4.025 4-9.975 4Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveUpW100Filled.displayName = 'AmauiIconMaterialTextSelectMoveUpW100Filled';

export default IconMaterialTextSelectMoveUpW100Filled;
