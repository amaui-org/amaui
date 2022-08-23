import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectRoundedW100'
      short_name='Eject'

      {...props}
    >
      <path d="M6.8 18.15Q6.675 18.15 6.588 18.062Q6.5 17.975 6.5 17.85Q6.5 17.725 6.588 17.638Q6.675 17.55 6.8 17.55H17.2Q17.325 17.55 17.413 17.638Q17.5 17.725 17.5 17.85Q17.5 17.975 17.413 18.062Q17.325 18.15 17.2 18.15ZM8 14.55Q7.55 14.55 7.325 14.15Q7.1 13.75 7.375 13.375L11.375 7.425Q11.6 7.075 12 7.075Q12.4 7.075 12.625 7.425L16.625 13.375Q16.9 13.75 16.675 14.15Q16.45 14.55 16 14.55ZM12 13.95ZM7.85 13.95H16.15L12 7.75Z"/>
    </Icon>
  );
});

IconMaterialEjectRoundedW100.displayName = 'AmauiIconMaterialEjectRoundedW100';

export default IconMaterialEjectRoundedW100;
