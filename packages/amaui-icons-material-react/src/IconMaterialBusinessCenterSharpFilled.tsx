import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterSharpFilled'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M2 13V6H8V2H16V6H22V13H15V11H9V13ZM10 6H14V4H10ZM11 15V13H13V15ZM2 21V15H9V17H15V15H22V21Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterSharpFilled.displayName = 'AmauiIconMaterialBusinessCenterSharpFilled';

export default IconMaterialBusinessCenterSharpFilled;
