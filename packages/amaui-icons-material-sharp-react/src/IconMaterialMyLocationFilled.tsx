import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMyLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationFilled'

      short_name='MyLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22.95v-2q-3.125-.35-5.362-2.587Q3.4 16.125 3.05 13h-2v-2h2q.35-3.125 2.588-5.363Q7.875 3.4 11 3.05v-2h2v2q3.125.35 5.363 2.587Q20.6 7.875 20.95 11h2v2h-2q-.35 3.125-2.587 5.363Q16.125 20.6 13 20.95v2ZM12 19q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5 9.1 5 7.05 7.05 5 9.1 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm0-3q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialMyLocationFilled.displayName = 'AmauiIconMaterialMyLocationFilled';

export default IconMaterialMyLocationFilled;
