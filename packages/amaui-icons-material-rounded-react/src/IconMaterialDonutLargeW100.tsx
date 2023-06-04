import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDonutLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLargeW100'

      short_name='DonutLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.975 11q-.375-2.725-2.3-4.663Q15.75 4.4 13.025 4.05v-.7q3.075.275 5.225 2.425Q20.4 7.925 20.675 11Zm-6.95 9.65v-.7q2.725-.35 4.625-2.287 1.9-1.938 2.325-4.663h.7q-.3 3.05-2.45 5.212-2.15 2.163-5.2 2.438Zm-2 0Q7.7 20.3 5.513 17.825 3.325 15.35 3.325 12t2.188-5.8Q7.7 3.75 11.025 3.35v.7Q8 4.475 6.013 6.725 4.025 8.975 4.025 12q0 3.025 1.988 5.275Q8 19.525 11.025 19.95Z"/>
    </Icon>
  );
});

IconMaterialDonutLargeW100.displayName = 'AmauiIconMaterialDonutLargeW100';

export default IconMaterialDonutLargeW100;
