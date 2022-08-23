import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoundedW100'
      short_name='Edit'

      {...props}
    >
      <path d="M5.4 19H6.375L16.65 8.725L15.675 7.75L5.4 18.025ZM18.15 8.225 16.175 6.25 17.35 5.075Q17.55 4.875 17.85 4.875Q18.15 4.875 18.35 5.075L19.325 6.05Q19.525 6.25 19.525 6.55Q19.525 6.85 19.325 7.05ZM5.45 19.7Q5.125 19.7 4.912 19.487Q4.7 19.275 4.7 18.95V18.025Q4.7 17.875 4.75 17.75Q4.8 17.625 4.925 17.5L15.675 6.75L17.65 8.725L6.9 19.475Q6.775 19.6 6.65 19.65Q6.525 19.7 6.375 19.7ZM16.15 8.225 15.675 7.75 16.65 8.725Z"/>
    </Icon>
  );
});

IconMaterialEditRoundedW100.displayName = 'AmauiIconMaterialEditRoundedW100';

export default IconMaterialEditRoundedW100;
