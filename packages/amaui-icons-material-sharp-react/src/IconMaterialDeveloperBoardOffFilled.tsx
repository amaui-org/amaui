import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffFilled'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.825 17 16 13.15V11h-2.15l-1.025-1H16V7h-4v2.175l-1-1V7H9.85L5.825 3H20v4h2v2h-2v2h2v2h-2v2h2v2ZM6 17h5v-4H6ZM3.2 3.175l16.8 16.8V21H2V3.175Zm8.8 8.8V17h4v-1.025ZM7.025 7H6v5h5v-1.025Zm13.45 16.3L.675 3.5 2.1 2.075l19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffFilled.displayName = 'AmauiIconMaterialDeveloperBoardOffFilled';

export default IconMaterialDeveloperBoardOffFilled;
