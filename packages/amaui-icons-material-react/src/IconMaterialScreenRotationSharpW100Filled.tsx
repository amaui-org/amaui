import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenRotationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationSharpW100Filled'
      short_name='ScreenRotation'

      {...props}
    >
      <path d="M14.025 18.975 4.975 9.925 9.925 4.975 18.975 14.025ZM12 22.7Q9.8 22.7 7.85 21.862Q5.9 21.025 4.438 19.562Q2.975 18.1 2.138 16.15Q1.3 14.2 1.3 12H2Q2 14.05 2.788 15.875Q3.575 17.7 4.938 19.062Q6.3 20.425 8.125 21.212Q9.95 22 12 22L8.3 18.3L8.8 17.8L13.55 22.55Q13.1 22.625 12.725 22.663Q12.35 22.7 12 22.7ZM22 12Q22 9.925 21.212 8.113Q20.425 6.3 19.062 4.938Q17.7 3.575 15.887 2.787Q14.075 2 12 2L15.7 5.7L15.2 6.2L10.45 1.45Q10.875 1.375 11.3 1.337Q11.725 1.3 12 1.3Q14.225 1.3 16.163 2.137Q18.1 2.975 19.562 4.437Q21.025 5.9 21.863 7.837Q22.7 9.775 22.7 12Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationSharpW100Filled.displayName = 'AmauiIconMaterialScreenRotationSharpW100Filled';

export default IconMaterialScreenRotationSharpW100Filled;
