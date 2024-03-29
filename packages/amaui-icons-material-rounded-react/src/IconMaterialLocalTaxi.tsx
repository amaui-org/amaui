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
      <path d="M4.5 21q-.625 0-1.062-.438Q3 20.125 3 19.5V12l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5H9V4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4v1h2.5q.475 0 .863.275.387.275.537.725l2.1 6v7.5q0 .625-.438 1.062Q20.125 21 19.5 21t-1.062-.438Q18 20.125 18 19.5V19H6v.5q0 .625-.438 1.062Q5.125 21 4.5 21Zm1.3-11h12.4l-1.05-3H6.85ZM5 12v5Zm2.5 4q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16ZM5 17h14v-5H5Z"/>
    </Icon>
  );
});

IconMaterialLocalTaxi.displayName = 'AmauiIconMaterialLocalTaxi';

export default IconMaterialLocalTaxi;
