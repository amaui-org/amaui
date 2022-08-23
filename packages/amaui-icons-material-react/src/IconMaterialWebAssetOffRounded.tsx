import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOffRounded'
      short_name='WebAssetOff'

      {...props}
    >
      <path d="M19.75 22.575 17.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.75 2.05 5.512Q2.1 5.275 2.225 5.075L1.35 4.2Q1.05 3.9 1.05 3.487Q1.05 3.075 1.35 2.775Q1.65 2.475 2.062 2.475Q2.475 2.475 2.775 2.775L21.175 21.175Q21.475 21.475 21.475 21.875Q21.475 22.275 21.175 22.575Q20.875 22.875 20.462 22.875Q20.05 22.875 19.75 22.575ZM4 18H15.15L5.15 8H4V18Q4 18 4 18Q4 18 4 18ZM21.775 18.925 20 17.15V8H10.85L6.85 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.25 21.95 18.488Q21.9 18.725 21.775 18.925Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOffRounded.displayName = 'AmauiIconMaterialWebAssetOffRounded';

export default IconMaterialWebAssetOffRounded;
