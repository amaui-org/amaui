import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightTextCursorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightTextCursorW100Filled'

      short_name='HighlightTextCursor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.174-132Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM480-160q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93ZM380-308h200q5.95 0 9.975-4.035 4.025-4.035 4.025-10T589.975-332q-4.025-4-9.975-4h-86v-308h86q5.95 0 9.975-4.035 4.025-4.035 4.025-10T589.975-668q-4.025-4-9.975-4H380q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h86v308h-86q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialHighlightTextCursorW100Filled.displayName = 'AmauiIconMaterialHighlightTextCursorW100Filled';

export default IconMaterialHighlightTextCursorW100Filled;
