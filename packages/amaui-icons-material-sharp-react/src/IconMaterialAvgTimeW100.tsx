import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgTimeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeW100'

      short_name='AvgTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3H5q0 2.9 2.05 4.95Q9.1 20 12 20q2.9 0 4.95-2.05Q19 15.9 19 13h.7q0 1.6-.6 3t-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6ZM4.3 13q0-1.6.6-3t1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6 1.425 0 2.763.525Q16.1 6.35 17.2 7.3l1-1 .5.5-1 1q.95 1.1 1.475 2.437.525 1.338.525 2.763H19q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13ZM9.5 2.35v-.7h5v.7ZM12 6Q9.2 6 7.163 7.925 5.125 9.85 5 12.65h3.225L10 16.225l4-8 2.225 4.425H19q-.125-2.8-2.163-4.725Q14.8 6 12 6Zm0 14q2.8 0 4.837-1.925Q18.875 16.15 19 13.35h-3.225L14 9.775l-4 8-2.225-4.425H5q.125 2.8 2.163 4.725Q9.2 20 12 20Zm0 0q-2.9 0-4.95-2.05Q5 15.9 5 13q0-2.9 2.05-4.95Q9.1 6 12 6q2.9 0 4.95 2.05Q19 10.1 19 13q0 2.9-2.05 4.95Q14.9 20 12 20Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100.displayName = 'AmauiIconMaterialAvgTimeW100';

export default IconMaterialAvgTimeW100;
