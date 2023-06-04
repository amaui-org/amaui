import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardW100'

      short_name='DeveloperBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 19.7V4.3H19V8h1.4v.7H19v2.95h1.4v.7H19v2.95h1.4v.7H19v3.7Zm.7-.7h14V5h-14Zm3-3h3.75v-2.75H7.3Zm5.25-6.25h2.75V8h-2.75Zm-5.25 2h3.75V8H7.3ZM12.55 16h2.75v-4.75h-2.75ZM4.3 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardW100.displayName = 'AmauiIconMaterialDeveloperBoardW100';

export default IconMaterialDeveloperBoardW100;
