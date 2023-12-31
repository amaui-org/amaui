import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBombW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BombW100Filled'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M762-614q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h40q5.95 0 9.975 4.035 4.025 4.035 4.025 10T811.975-618q-4.025 4-9.975 4h-40ZM599.965-788Q594-788 590-792.025T586-802v-40q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v40q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM738-758q-4-4-4-9t4-9l29-30q4-4 10-4.5t10 4q4 4.5 3.5 10.5t-4.5 10l-29 29q-4 4-9.5 3.5T738-758Zm-88.222 99q-1.778 0-3.478-.36-1.7-.36-3.4-1.44L631-668q-24-14-51-7t-40 31l-4 8 25 14q17 9 21.5 27t-4.5 35l-24 42q23 38 39 78.5t16 85.5q0 102-72.265 172-72.264 70-175.5 70Q258-112 185-184.675 112-257.351 112-360q0-105 75.5-176.5T369-608q8 0 16.5.5T402-606l23-41q9-17 27-21.5t35 4.5l25 14 5-8q20-34 57-44t71 10l11.86 7.125Q660-683 662-679.766q2 3.234 2 6.979 0 5.787-4.089 9.787-4.089 4-10.133 4Z"/>
    </Icon>
  );
});

IconMaterialBombW100Filled.displayName = 'AmauiIconMaterialBombW100Filled';

export default IconMaterialBombW100Filled;
