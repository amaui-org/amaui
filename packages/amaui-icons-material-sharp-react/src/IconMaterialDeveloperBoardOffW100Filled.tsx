import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffW100Filled'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.8 15.55-3.5-3.5v-.8h-.8L13 9.75h2.3V8h-2.75v1.325L11.475 8.25V8h-.25l-3.7-3.7H19V8h1.4v.7H19v2.725h1.4v.7H19v2.725h1.4v.7ZM7.3 16h3.85v-2.75H7.3ZM4.675 4.325l14.3 14.3V19.7H3.6V4.325ZM12.55 12.2V16h2.75v-1.05ZM8.35 8H7.3v3.75h3.85v-.95Zm13.125 14.125L2.425 3.075l.5-.5 19.05 19.05Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffW100Filled.displayName = 'AmauiIconMaterialDeveloperBoardOffW100Filled';

export default IconMaterialDeveloperBoardOffW100Filled;
