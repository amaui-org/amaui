import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKebabDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KebabDiningFilled'

      short_name='KebabDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 23v-4H5.5q-1.05 0-1.775-.725Q3 17.55 3 16.5q0-1.05.725-1.775Q4.45 14 5.5 14h.75v-1H3V8h3.25V7H5.5q-1.05 0-1.775-.725Q3 5.55 3 4.5q0-1.05.725-1.775Q4.45 2 5.5 2h.75V1h1.5v1h.75q1.05 0 1.775.725Q11 3.45 11 4.5q0 1.05-.725 1.775Q9.55 7 8.5 7h-.75v1H11v5H7.75v1h.75q1.05 0 1.775.725Q11 15.45 11 16.5q0 1.05-.725 1.775Q9.55 19 8.5 19h-.75v4Zm10 0v-4h-.75q-1.05 0-1.775-.725Q13 17.55 13 16.5q0-1.05.725-1.775Q14.45 14 15.5 14h.75v-1H13V8h3.25V7h-.75q-1.05 0-1.775-.725Q13 5.55 13 4.5q0-1.05.725-1.775Q14.45 2 15.5 2h.75V1h1.5v1h.75q1.05 0 1.775.725Q21 3.45 21 4.5q0 1.05-.725 1.775Q19.55 7 18.5 7h-.75v1H21v5h-3.25v1h.75q1.05 0 1.775.725Q21 15.45 21 16.5q0 1.05-.725 1.775Q19.55 19 18.5 19h-.75v4Z"/>
    </Icon>
  );
});

IconMaterialKebabDiningFilled.displayName = 'AmauiIconMaterialKebabDiningFilled';

export default IconMaterialKebabDiningFilled;
