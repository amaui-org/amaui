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
      <path d="M12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2l2.1-2.1 1.4 1.4L19 14l-4.5-4.5 1.4-1.4 2.1 2.1q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35q.5-.45.925-.875l.85-.85q-.125-.25-.2-.538-.075-.287-.075-.587 0-1.05.725-1.775Q14.95 14 16 14q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q17.05 19 16 19q-.2 0-.362-.025-.163-.025-.338-.075-.725.75-1.537 1.525Q12.95 21.2 12 22Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravel.displayName = 'AmauiIconMaterialModeOfTravel';

export default IconMaterialModeOfTravel;
