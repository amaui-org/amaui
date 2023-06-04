import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinFullW100Filled'

      short_name='JoinFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.6 17.7q-.725 0-1.512-.213-.788-.212-1.363-.562.925-.575 1.5-1.937.575-1.363.575-2.988t-.575-2.988q-.575-1.362-1.5-1.937.575-.35 1.363-.563.787-.212 1.512-.212 2.375 0 4.038 1.663Q21.3 9.625 21.3 12t-1.662 4.038Q17.975 17.7 15.6 17.7ZM12 16.425q-.825 0-1.462-1.35Q9.9 13.725 9.9 12t.638-3.075q.637-1.35 1.462-1.35t1.463 1.35q.637 1.35.637 3.075t-.637 3.075q-.638 1.35-1.463 1.35ZM8.4 17.7q-2.375 0-4.037-1.662Q2.7 14.375 2.7 12t1.663-4.037Q6.025 6.3 8.4 6.3q.725 0 1.513.212.787.213 1.362.563-.925.575-1.5 1.937Q9.2 10.375 9.2 12t.575 2.988q.575 1.362 1.5 1.937-.575.35-1.362.562-.788.213-1.513.213Z"/>
    </Icon>
  );
});

IconMaterialJoinFullW100Filled.displayName = 'AmauiIconMaterialJoinFullW100Filled';

export default IconMaterialJoinFullW100Filled;
