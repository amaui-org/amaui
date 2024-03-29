import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinRightW100'

      short_name='JoinRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.6 17.7q-.725 0-1.512-.213-.788-.212-1.363-.562.925-.575 1.5-1.937.575-1.363.575-2.988t-.575-2.988q-.575-1.362-1.5-1.937.575-.35 1.363-.563.787-.212 1.512-.212 2.375 0 4.038 1.663Q21.3 9.625 21.3 12t-1.662 4.038Q17.975 17.7 15.6 17.7ZM12 16.425q-.825 0-1.462-1.35Q9.9 13.725 9.9 12t.638-3.075q.637-1.35 1.462-1.35t1.463 1.35q.637 1.35.637 3.075t-.637 3.075q-.638 1.35-1.463 1.35Zm-3.6 1.25q-2.35 0-4.012-1.663Q2.725 14.35 2.725 12q0-2.35 1.663-4.013Q6.05 6.325 8.4 6.325q.8 0 1.5.187.7.188 1.35.563-.15.1-.3.237-.15.138-.275.263-.5-.275-1.075-.413-.575-.137-1.2-.137-2.075 0-3.525 1.45-1.45 1.45-1.45 3.525t1.45 3.525q1.45 1.45 3.525 1.45.625 0 1.2-.138.575-.137 1.075-.412.125.125.275.263.15.137.3.237-.65.375-1.35.563-.7.187-1.5.187Z"/>
    </Icon>
  );
});

IconMaterialJoinRightW100.displayName = 'AmauiIconMaterialJoinRightW100';

export default IconMaterialJoinRightW100;
