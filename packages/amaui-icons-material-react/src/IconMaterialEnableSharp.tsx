import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEnableSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableSharp'
      short_name='Enable'

      {...props}
    >
      <path d="M12 16 7 11 8.4 9.6 11 12.175V2H13V12.175L15.6 9.6L17 11ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 8.625 3.975 6.012Q5.95 3.4 9 2.45V4.6Q6.8 5.5 5.4 7.487Q4 9.475 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 9.475 18.6 7.487Q17.2 5.5 15 4.6V2.45Q18.05 3.4 20.025 6.012Q22 8.625 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialEnableSharp.displayName = 'AmauiIconMaterialEnableSharp';

export default IconMaterialEnableSharp;
