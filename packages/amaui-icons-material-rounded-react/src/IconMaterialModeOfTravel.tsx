import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeOfTravel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOfTravel'

      short_name='ModeOfTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.675q-.175 0-.35-.05t-.3-.175q-3.7-3.275-5.525-6.05Q4 12.625 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2l1.4-1.4q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-3.1 3.1q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-3.1-3.1q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.4 1.4q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35q.5-.45.925-.875l.85-.85q-.125-.25-.2-.538-.075-.287-.075-.587 0-1.05.725-1.775Q14.95 14 16 14q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q17.05 19 16 19q-.2 0-.362-.025-.163-.025-.338-.075-.575.625-1.238 1.263-.662.637-1.412 1.287-.125.125-.287.175-.163.05-.363.05Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravel.displayName = 'AmauiIconMaterialModeOfTravel';

export default IconMaterialModeOfTravel;
