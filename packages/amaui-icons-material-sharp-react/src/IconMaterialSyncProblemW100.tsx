import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncProblemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncProblemW100'

      short_name='SyncProblem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.3V7.65h.7v5.65Zm.35 3.4q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm3.15-11.85h4.4v.7h-3.2L17.6 6.8q1.125 1.125 1.638 2.438.512 1.312.512 2.662 0 2.3-1.288 4.187-1.287 1.888-3.412 2.763v-.75q1.825-.8 2.912-2.487 1.088-1.688 1.088-3.713 0-1.25-.475-2.425Q18.1 8.3 17.1 7.3l-1.25-1.25v3.2h-.7Zm-6.3 14.3h-4.4v-.7h3.2L6.4 17.2q-1.125-1.125-1.637-2.438Q4.25 13.45 4.25 12.1q0-2.3 1.287-4.188Q6.825 6.025 8.95 5.15v.75q-1.825.8-2.913 2.487Q4.95 10.075 4.95 12.1q0 1.25.475 2.425Q5.9 15.7 6.9 16.7l1.25 1.25v-3.2h.7Z"/>
    </Icon>
  );
});

IconMaterialSyncProblemW100.displayName = 'AmauiIconMaterialSyncProblemW100';

export default IconMaterialSyncProblemW100;
