import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingTwoTone'
      short_name='FormatLineSpacing'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zm8.5-6h12v2H10z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingTwoTone.displayName = 'AmauiIconMaterialFormatLineSpacingTwoTone';

export default IconMaterialFormatLineSpacingTwoTone;
