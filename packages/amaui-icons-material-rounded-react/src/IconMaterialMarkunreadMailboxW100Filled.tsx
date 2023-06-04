import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxW100Filled'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2v-8.4q0-.65.425-1.075Q4.15 9.3 4.8 9.3h2V3.4q0-.325.213-.538.212-.212.537-.212h4.55q.325 0 .538.212.212.213.212.538v1.2q0 .325-.212.537-.213.213-.538.213H7.5V13q0 .425.288.712.287.288.712.288t.713-.288Q9.5 13.425 9.5 13V9.3h9.7q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxW100Filled.displayName = 'AmauiIconMaterialMarkunreadMailboxW100Filled';

export default IconMaterialMarkunreadMailboxW100Filled;
