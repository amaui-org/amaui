import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorW100'

      short_name='Elevator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 17.35h1.7V13.6h1V9.65h-3.7v3.95h1ZM9 8.75q.425 0 .713-.288Q10 8.175 10 7.75t-.287-.713Q9.425 6.75 9 6.75t-.712.287Q8 7.325 8 7.75t.288.712q.287.288.712.288Zm4.925 1.6h2.65L15.25 8.225Zm1.325 5.425 1.325-2.125h-2.65ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialElevatorW100.displayName = 'AmauiIconMaterialElevatorW100';

export default IconMaterialElevatorW100;
