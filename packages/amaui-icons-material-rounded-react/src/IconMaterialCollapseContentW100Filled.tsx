import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseContentW100Filled'

      short_name='CollapseContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-412H266q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h144q12.75 0 21.375 8.625T440-410v144q0 5.95-4.035 9.975-4.035 4.025-10 4.025T416-256.025q-4-4.025-4-9.975v-146Zm136-136h146q5.95 0 9.975 4.035 4.025 4.035 4.025 10T703.975-524q-4.025 4-9.975 4H550q-12.75 0-21.375-8.625T520-550v-144q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v146Z"/>
    </Icon>
  );
});

IconMaterialCollapseContentW100Filled.displayName = 'AmauiIconMaterialCollapseContentW100Filled';

export default IconMaterialCollapseContentW100Filled;
