import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiotech = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Biotech'

      short_name='Biotech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21v-2h5v-2q-2.075 0-3.537-1.463Q5 14.075 5 12q0-1.525.838-2.775Q6.675 7.975 8.1 7.4q.2-.85.888-1.375.687-.525 1.562-.525L10 3.95l.95-.35-.35-.9 1.9-.7.3.95.95-.35 2.75 7.5-.95.35.35.95-1.9.7-.3-.95-.95.35-.6-1.65q-.375.35-.862.525-.488.175-.988.125-.55-.05-1.025-.338-.475-.287-.825-.712-.675.4-1.062 1.075Q7 11.2 7 12q0 1.25.875 2.125T10 15h8v2h-5v2h6v2Zm8.65-11.45.9-.35-1.7-4.7-.95.35ZM10.5 9q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q10.925 7 10.5 7t-.712.287Q9.5 7.575 9.5 8t.288.712Q10.075 9 10.5 9Zm3.15.55ZM10.5 8Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialBiotech.displayName = 'AmauiIconMaterialBiotech';

export default IconMaterialBiotech;
