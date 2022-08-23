import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrunchDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningSharpFilled'
      short_name='BrunchDining'

      {...props}
    >
      <path d="M2 22V20H16V22ZM2 18V16H7V14H11V16H16V18ZM18 22V15.9Q17.1 14.875 16.55 13.875Q16 12.875 16 11.45V2H22V11.45Q22 12.875 21.462 13.887Q20.925 14.9 20 15.9V20H22V22ZM18 8H20V4H18Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningSharpFilled.displayName = 'AmauiIconMaterialBrunchDiningSharpFilled';

export default IconMaterialBrunchDiningSharpFilled;
