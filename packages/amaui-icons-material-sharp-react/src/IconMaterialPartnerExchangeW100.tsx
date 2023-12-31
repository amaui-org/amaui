import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPartnerExchangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartnerExchangeW100'

      short_name='PartnerExchange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-622 377-725l103-103 104 103-104 103ZM93-192v-134q0-21 13.5-36.5T140-380h111q15 0 28.5 7t22.5 21q31 44 77.5 68T480-260q54 0 101-24t78-68q9-14 22.5-21t27.5-7h111q20 2 34 17.5t14 36.5v134H640v-99q-33 28-74 43.5T480-232q-44 0-84.5-15T321-290v98H93Zm97-268q-38 0-66-28t-28-66q0-39 28-66.5t66-27.5q39 0 66.5 27.5T284-554q0 38-27.5 66T190-460Zm580 0q-38 0-66-28t-28-66q0-39 28-66.5t66-27.5q39 0 66.5 27.5T864-554q0 38-27.5 66T770-460Z"/>
    </Icon>
  );
});

IconMaterialPartnerExchangeW100.displayName = 'AmauiIconMaterialPartnerExchangeW100';

export default IconMaterialPartnerExchangeW100;
