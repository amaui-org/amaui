import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightRoundedW100'
      short_name='LineWeight'

      {...props}
    >
      <path d="M6.575 15.4Q6.45 15.4 6.35 15.3Q6.25 15.2 6.25 15.05Q6.25 14.9 6.35 14.8Q6.45 14.7 6.6 14.7H17.425Q17.55 14.7 17.65 14.8Q17.75 14.9 17.75 15.05Q17.75 15.2 17.65 15.3Q17.55 15.4 17.4 15.4ZM6.4 17.75Q6.35 17.75 6.3 17.7Q6.25 17.65 6.25 17.575Q6.25 17.5 6.3 17.45Q6.35 17.4 6.425 17.4H17.6Q17.65 17.4 17.7 17.45Q17.75 17.5 17.75 17.575Q17.75 17.65 17.7 17.7Q17.65 17.75 17.575 17.75ZM6.75 12.7Q6.55 12.7 6.4 12.55Q6.25 12.4 6.25 12.2Q6.25 11.975 6.4 11.837Q6.55 11.7 6.75 11.7H17.25Q17.475 11.7 17.613 11.837Q17.75 11.975 17.75 12.2Q17.75 12.4 17.613 12.55Q17.475 12.7 17.25 12.7ZM7 9.65Q6.675 9.65 6.463 9.438Q6.25 9.225 6.25 8.9V7Q6.25 6.675 6.463 6.463Q6.675 6.25 7 6.25H17Q17.325 6.25 17.538 6.463Q17.75 6.675 17.75 7V8.9Q17.75 9.225 17.538 9.438Q17.325 9.65 17 9.65Z"/>
    </Icon>
  );
});

IconMaterialLineWeightRoundedW100.displayName = 'AmauiIconMaterialLineWeightRoundedW100';

export default IconMaterialLineWeightRoundedW100;
