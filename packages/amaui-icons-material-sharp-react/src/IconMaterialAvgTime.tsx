import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgTime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTime'

      short_name='AvgTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13h2q0 2.9 2.05 4.95Q9.1 20 12 20q2.9 0 4.95-2.05Q19 15.9 19 13h2q0 1.85-.712 3.488-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Zm-9-9q0-1.85.712-3.488.713-1.637 1.938-2.862t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4Q20 8.6 20.5 10.025 21 11.45 21 13h-2q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13ZM9 3V1h6v2Zm3 3Q9.35 6 7.4 7.725 5.45 9.45 5.075 12h3.55l1.3 2.4L14 7.25 16.6 12h2.325Q18.55 9.45 16.6 7.725 14.65 6 12 6Zm0 14q2.65 0 4.6-1.725Q18.55 16.55 18.925 14h-3.55l-1.3-2.4L10 18.75 7.4 14H5.075q.375 2.55 2.325 4.275Q9.35 20 12 20Zm0 0q-2.9 0-4.95-2.05Q5 15.9 5 13q0-2.9 2.05-4.95Q9.1 6 12 6q2.9 0 4.95 2.05Q19 10.1 19 13q0 2.9-2.05 4.95Q14.9 20 12 20Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialAvgTime.displayName = 'AmauiIconMaterialAvgTime';

export default IconMaterialAvgTime;
