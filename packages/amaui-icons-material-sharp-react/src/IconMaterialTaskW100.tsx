import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 16.525 4.75-4.75-.5-.5-4.25 4.25-2.15-2.15-.5.5ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
});

IconMaterialTaskW100.displayName = 'AmauiIconMaterialTaskW100';

export default IconMaterialTaskW100;
