import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalTaxi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalTaxi'

      short_name='LocalTaxi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-9l2.45-7H9V3h6v2h3.55L21 12v9h-3v-2H6v2Zm2.8-11h12.4l-1.05-3H6.85ZM5 12v5Zm2.5 4q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16ZM5 17h14v-5H5Z"/>
    </Icon>
  );
});

IconMaterialLocalTaxi.displayName = 'AmauiIconMaterialLocalTaxi';

export default IconMaterialLocalTaxi;
