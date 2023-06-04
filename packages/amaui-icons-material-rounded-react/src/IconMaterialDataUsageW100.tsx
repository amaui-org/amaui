import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataUsageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsageW100'

      short_name='DataUsage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 15.4-.6-.35q.35-.725.475-1.488Q20 12.8 20 12q0-3.025-1.987-5.3Q16.025 4.425 13 4.05v-.7q3.325.3 5.513 2.8Q20.7 8.65 20.7 12q0 .875-.162 1.738-.163.862-.538 1.662Zm-8 5.3q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-3.35 2.2-5.8Q7.7 3.75 11 3.35v.7q-3.025.4-5.012 2.662Q4 8.975 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q1.9 0 3.588-.812 1.687-.813 2.812-2.338l.6.4q-1.275 1.65-3.1 2.55-1.825.9-3.9.9Z"/>
    </Icon>
  );
});

IconMaterialDataUsageW100.displayName = 'AmauiIconMaterialDataUsageW100';

export default IconMaterialDataUsageW100;
