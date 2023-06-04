import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergySavingsLeafW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeafW100'

      short_name='EnergySavingsLeaf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-1.5 0-2.812-.537-1.313-.538-2.363-1.488l-2.4 2.4-.5-.5 2.4-2.4q-.95-1.05-1.487-2.363Q4.3 13.5 4.3 12q0-3.225 2.25-5.463Q8.8 4.3 12 4.3h7.7V12q0 3.2-2.237 5.45Q15.225 19.7 12 19.7Zm0-.7q2.925 0 4.962-2.05Q19 14.9 19 12V5h-7Q9.1 5 7.05 7.037 5 9.075 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-1.05-3.1 4.125-3.7q.2-.2.113-.438-.088-.237-.363-.287l-3.225-.3L13.55 8.5q.075-.1.063-.213-.013-.112-.088-.212-.1-.1-.225-.1t-.225.1l-4.125 3.7q-.2.2-.125.437.075.238.35.288l3.25.3-1.95 2.675q-.075.1-.062.213.012.112.112.212.075.1.2.1t.225-.1ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeafW100.displayName = 'AmauiIconMaterialEnergySavingsLeafW100';

export default IconMaterialEnergySavingsLeafW100;
