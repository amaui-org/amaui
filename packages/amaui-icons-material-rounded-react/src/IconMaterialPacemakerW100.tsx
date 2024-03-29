import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPacemakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PacemakerW100'

      short_name='Pacemaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.725 20.425q-1.075 0-1.825-.75t-.75-1.825V10.3q-.55-.525-1.275-1.163Q2.15 8.5 2.15 7.65q0-.425.288-.713.287-.287.712-.287t.775.275q.35.275.575.675.225-.4.575-.675t.775-.275q.425 0 .712.287.288.288.288.713 0 .85-.725 1.487Q5.4 9.775 4.85 10.3v7.55q0 .775.55 1.325.55.55 1.325.55.775 0 1.325-.55.55-.55.55-1.325V7.65q0-1.775 1.238-3.013Q11.075 3.4 12.85 3.4t3.013 1.237Q17.1 5.875 17.1 7.65v.675q1.425.125 2.388 1.175.962 1.05.962 2.5v5q0 1.55-1.075 2.625T16.75 20.7q-1.55 0-2.625-1.075T13.05 17v-5q0-1.45.963-2.5.962-1.05 2.387-1.175V7.65q0-1.475-1.037-2.513Q14.325 4.1 12.85 4.1q-1.475 0-2.512 1.037Q9.3 6.175 9.3 7.65v10.2q0 1.075-.75 1.825t-1.825.75ZM16.75 20q1.25 0 2.125-.875T19.75 17v-5q0-1.25-.875-2.125T16.75 9q-1.25 0-2.125.875T13.75 12v5q0 1.25.875 2.125T16.75 20Zm0-4.35q-.575 0-.962.388-.388.387-.388.962t.388.962q.387.388.962.388t.962-.388q.388-.387.388-.962t-.388-.962q-.387-.388-.962-.388Zm0 1.35Z"/>
    </Icon>
  );
});

IconMaterialPacemakerW100.displayName = 'AmauiIconMaterialPacemakerW100';

export default IconMaterialPacemakerW100;
