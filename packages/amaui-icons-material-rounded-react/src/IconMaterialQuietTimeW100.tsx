import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeW100'

      short_name='QuietTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 21.7q-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-2.375 1.175-4.413Q6.65 6.45 8.725 5.275q.35-.2.688-.038.337.163.387.538.2 2.025 1.038 3.862.837 1.838 2.262 3.263 1.425 1.425 3.238 2.25 1.812.825 3.837 1.025.4.05.575.4.175.35-.025.7-1.175 2.075-3.212 3.25Q15.475 21.7 13.1 21.7Zm0-.7q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.1-1.925-.9-3.45-2.425-1.525-1.525-2.425-3.438Q9.275 8 9.1 5.85 7.175 6.925 6.088 8.812 5 10.7 5 12.9q0 3.375 2.363 5.737Q9.725 21 13.1 21Zm-.5-7.65Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeW100.displayName = 'AmauiIconMaterialQuietTimeW100';

export default IconMaterialQuietTimeW100;
