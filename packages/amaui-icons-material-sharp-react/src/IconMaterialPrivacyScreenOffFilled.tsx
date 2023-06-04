import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOffFilled'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M818 1028 686 896H136l275-275-56-56L80 840V673l191-192-56-56L80 560V304h14l-68-68 57-57 792 792-57 57Zm62-166L525 507l251-251h104v606ZM469 451l-84-84 111-111h167L469 451ZM329 311l-55-55h110l-55 55Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOffFilled.displayName = 'AmauiIconMaterialPrivacyScreenOffFilled';

export default IconMaterialPrivacyScreenOffFilled;
