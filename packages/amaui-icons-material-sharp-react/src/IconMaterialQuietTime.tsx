import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTime'

      short_name='QuietTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 23q-2.1 0-3.938-.8-1.837-.8-3.199-2.162Q4.6 18.675 3.8 16.837 3 15 3 12.9q0-3.65 2.325-6.438Q7.65 3.675 11.25 3q-.45 2.475.275 4.837.725 2.363 2.5 4.138t4.138 2.5q2.362.725 4.837.275-.65 3.6-3.45 5.925Q16.75 23 13.1 23Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.087-1.925-.888-3.45-2.413-1.525-1.525-2.425-3.45Q9.275 8 9.1 5.85 7.175 6.925 6.088 8.812 5 10.7 5 12.9q0 3.375 2.363 5.737Q9.725 21 13.1 21Zm-.5-7.625Z"/>
    </Icon>
  );
});

IconMaterialQuietTime.displayName = 'AmauiIconMaterialQuietTime';

export default IconMaterialQuietTime;
