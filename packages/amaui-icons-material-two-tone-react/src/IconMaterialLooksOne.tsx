import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksOne = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOne'

      short_name='LooksOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5v14h14V5zm-5 12h-2V9h-2V7h4v10z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm5 4h2v8h2V7h-4z"/>
    </Icon>
  );
});

IconMaterialLooksOne.displayName = 'AmauiIconMaterialLooksOne';

export default IconMaterialLooksOne;
