import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeFilled'

      short_name='StayCurrentLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19V5h22v14Zm5-2h12V7H6Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeFilled.displayName = 'AmauiIconMaterialStayCurrentLandscapeFilled';

export default IconMaterialStayCurrentLandscapeFilled;
