import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveItemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveItemW100Filled'

      short_name='MoveItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M836-466H378q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h458l-80-80q-4-4-4.5-9.5t4.283-10.5Q761-599 766-599q5 0 10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5t-10.717-4.5Q751-371 751-376t5-10l80-80ZM250-172q-24.75 0-42.375-17.625T190-232v-496q0-24.75 17.625-42.375T250-788h336q24.75 0 42.375 17.625T646-728v100q0 5.95-4.035 9.975-4.035 4.025-10 4.025T622-618.025q-4-4.025-4-9.975v-100q0-14-9-23t-23-9H250q-14 0-23 9t-9 23v496q0 14 9 23t23 9h336q14 0 23-9t9-23v-100q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v100q0 24.75-17.625 42.375T586-172H250Z"/>
    </Icon>
  );
});

IconMaterialMoveItemW100Filled.displayName = 'AmauiIconMaterialMoveItemW100Filled';

export default IconMaterialMoveItemW100Filled;
