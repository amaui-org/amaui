import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightLand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLand'

      short_name='FlightLand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm14.85-5.1L3.725 11.7q-.325-.1-.525-.35-.2-.25-.2-.6V7.125q0-.475.325-.688.325-.212.775-.062.175.05.338.213.162.162.212.337L5.2 8.6 10 9.95V3.325q0-.55.375-.838.375-.287.925-.162.275.075.55.325t.375.525l2.525 8.075 5 1.4q.575.15.913.612.337.463.337 1.038 0 .825-.675 1.325t-1.475.275Z"/>
    </Icon>
  );
});

IconMaterialFlightLand.displayName = 'AmauiIconMaterialFlightLand';

export default IconMaterialFlightLand;
