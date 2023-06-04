import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalculateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateFilled'

      short_name='Calculate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 9.2h5V7.7h-5ZM13 17.25h5v-1.5h-5Zm0-2.5h5v-1.5h-5ZM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2Zm6.1-7.05 1.4-1.4 1.4 1.4 1.05-1.05-1.4-1.45 1.4-1.4L16.9 6l-1.4 1.4L14.1 6l-1.05 1.05 1.4 1.4-1.4 1.45ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialCalculateFilled.displayName = 'AmauiIconMaterialCalculateFilled';

export default IconMaterialCalculateFilled;
