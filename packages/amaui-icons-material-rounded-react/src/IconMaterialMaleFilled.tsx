import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleFilled'

      short_name='Male'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.238.8.237 1.475.737L16.575 6H15q-.425 0-.712-.287Q14 5.425 14 5t.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5v4q0 .425-.288.712Q19.425 10 19 10t-.712-.288Q18 9.425 18 9V7.425l-3.975 3.95q.475.7.725 1.487.25.788.25 1.638 0 2.3-1.6 3.9T9.5 20Zm0-9q-1.45 0-2.475 1.025Q6 13.05 6 14.5q0 1.45 1.025 2.475Q8.05 18 9.5 18q1.45 0 2.475-1.025Q13 15.95 13 14.5q0-1.45-1.025-2.475Q10.95 11 9.5 11Z"/>
    </Icon>
  );
});

IconMaterialMaleFilled.displayName = 'AmauiIconMaterialMaleFilled';

export default IconMaterialMaleFilled;
