import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationSearchingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingFilled'

      short_name='LocationSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 23v-2q-3.125-.35-5.362-2.587Q3.4 16.175 3.05 13.05h-2v-2h2q.35-3.125 2.588-5.362Q7.875 3.45 11 3.1v-2h2v2q3.125.35 5.363 2.588Q20.6 7.925 20.95 11.05h2v2h-2q-.35 3.125-2.587 5.363Q16.125 20.65 13 21v2Zm1-3.95q2.9 0 4.95-2.05Q19 14.95 19 12.05q0-2.9-2.05-4.95Q14.9 5.05 12 5.05q-2.9 0-4.95 2.05Q5 9.15 5 12.05q0 2.9 2.05 4.95Q9.1 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingFilled.displayName = 'AmauiIconMaterialLocationSearchingFilled';

export default IconMaterialLocationSearchingFilled;
