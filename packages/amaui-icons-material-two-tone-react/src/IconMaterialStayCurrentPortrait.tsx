import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortrait'

      short_name='StayCurrentPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 5h10v14H7z" opacity=".3"/><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortrait.displayName = 'AmauiIconMaterialStayCurrentPortrait';

export default IconMaterialStayCurrentPortrait;
