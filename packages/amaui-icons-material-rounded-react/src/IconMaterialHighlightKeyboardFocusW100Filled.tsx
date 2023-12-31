import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightKeyboardFocusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightKeyboardFocusW100Filled'

      short_name='HighlightKeyboardFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.035-308q5.965 0 9.965-4.025t4-9.975v-336q0-5.95-4.035-9.975-4.035-4.025-10-4.025T470-667.975q-4 4.025-4 9.975v336q0 5.95 4.035 9.975 4.035 4.025 10 4.025Zm.139 176Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132Z"/>
    </Icon>
  );
});

IconMaterialHighlightKeyboardFocusW100Filled.displayName = 'AmauiIconMaterialHighlightKeyboardFocusW100Filled';

export default IconMaterialHighlightKeyboardFocusW100Filled;
