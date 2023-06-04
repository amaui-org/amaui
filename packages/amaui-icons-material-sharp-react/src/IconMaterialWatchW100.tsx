import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchW100'

      short_name='Watch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.95 19.65-.75-2.7q-1.275-.675-2.087-2Q6.3 13.625 6.3 12q0-1.625.813-2.95.812-1.325 2.087-2l.75-2.7h4.1l.75 2.7q1.275.675 2.087 2 .813 1.325.813 2.95 0 1.625-.813 2.95-.812 1.325-2.087 2l-.75 2.7ZM12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17ZM10.05 6.65Q11.1 6.3 12 6.3q.9 0 1.95.35l-.45-1.6h-3Zm.45 12.3h3l.45-1.6q-1.05.35-1.95.35-.9 0-1.95-.35Zm-.45-13.9H13.95h-3.9Zm.45 13.9h-.45 3.9-.45Z"/>
    </Icon>
  );
});

IconMaterialWatchW100.displayName = 'AmauiIconMaterialWatchW100';

export default IconMaterialWatchW100;
