import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardFilled'

      short_name='DeveloperBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V3h18v4h2v2h-2v2h2v2h-2v2h2v2h-2v4Zm4-4h5v-4H6Zm6-7h4V7h-4Zm-6 2h5V7H6Zm6 5h4v-6h-4Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardFilled.displayName = 'AmauiIconMaterialDeveloperBoardFilled';

export default IconMaterialDeveloperBoardFilled;
