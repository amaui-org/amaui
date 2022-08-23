import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBakeryDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningSharpFilled'
      short_name='BakeryDining'

      {...props}
    >
      <path d="M20.45 18.2 18.5 17.25 20.325 12.75 22.525 17ZM15.5 17 16.35 7.575 20.15 9.1 17 17ZM7 17 3.85 9.1 7.65 7.575 8.5 17ZM3.55 18.2 1.475 17 3.675 12.75 5.5 17.25ZM10 17 9 6H15L14 17Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningSharpFilled.displayName = 'AmauiIconMaterialBakeryDiningSharpFilled';

export default IconMaterialBakeryDiningSharpFilled;
