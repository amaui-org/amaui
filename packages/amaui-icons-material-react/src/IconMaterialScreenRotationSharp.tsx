import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenRotationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationSharp'
      short_name='ScreenRotation'

      {...props}
    >
      <path d="M13.75 20.8 3.2 10.25 10.25 3.2 20.8 13.75ZM13.75 18 18 13.75 10.25 6 6 10.25ZM12 24Q9.525 24 7.338 23.05Q5.15 22.1 3.525 20.475Q1.9 18.85 0.95 16.663Q0 14.475 0 12H2Q2 13.8 2.612 15.425Q3.225 17.05 4.3 18.35Q5.375 19.65 6.85 20.562Q8.325 21.475 10.025 21.825L7.4 19.2L8.8 17.8L14.7 23.7Q14.025 23.85 13.375 23.925Q12.725 24 12 24ZM22 12Q22 10.2 21.388 8.575Q20.775 6.95 19.7 5.65Q18.625 4.35 17.15 3.437Q15.675 2.525 13.975 2.175L16.6 4.8L15.2 6.2L9.3 0.3Q9.975 0.15 10.625 0.075Q11.275 0 12 0Q14.475 0 16.663 0.95Q18.85 1.9 20.475 3.525Q22.1 5.15 23.05 7.337Q24 9.525 24 12ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationSharp.displayName = 'AmauiIconMaterialScreenRotationSharp';

export default IconMaterialScreenRotationSharp;
