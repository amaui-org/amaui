import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamFloodlightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamFloodlightFilled'

      short_name='NestCamFloodlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 18V0h2q.825 0 1.413.587Q4 1.175 4 2v1.725q.8-1.25 2.075-1.988Q7.35 1 8.925 1H16v8.575l2.125 2.125-8.475 8.475-4.875-4.85q-.225-.225-.413-.462-.187-.238-.362-.513V16q0 .825-.587 1.413Q2.825 18 2 18ZM8.925 3q-1.5 0-2.562.987Q5.3 4.975 5.1 6.45q.8-.675 1.788-1.063Q7.875 5 9 5q1.2 0 2.3.487 1.1.488 1.95 1.338l.75.75V3ZM20 16h-3v-2h3Zm-2.8 4.6-2.1-2.1 1.4-1.4 2.1 2.1ZM12 22v-3h2v3Z"/>
    </Icon>
  );
});

IconMaterialNestCamFloodlightFilled.displayName = 'AmauiIconMaterialNestCamFloodlightFilled';

export default IconMaterialNestCamFloodlightFilled;
