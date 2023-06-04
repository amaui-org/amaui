import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBar'

      short_name='LocalBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-2h5v-5L3 5V3h18v2l-8 9v5h5v2ZM7.45 7h9.1l1.8-2H5.65ZM12 12.1 14.775 9h-5.55Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLocalBar.displayName = 'AmauiIconMaterialLocalBar';

export default IconMaterialLocalBar;
