import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamStandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandW100'

      short_name='NestCamStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.225 19.7.675-7.8q.175-1.95 1.387-3.4Q8.5 7.05 10.3 6.55V6q0-.725.488-1.213Q11.275 4.3 12 4.3t1.213.487Q13.7 5.275 13.7 6v.55q1.8.5 3.025 1.95 1.225 1.45 1.4 3.4l.675 7.8ZM6 19h12l-.6-7q-.125-1.675-1.15-2.95-1.025-1.275-2.55-1.775V10q0 .725-.487 1.212-.488.488-1.213.488-.725 0-1.212-.488Q10.3 10.725 10.3 10V7.275q-1.5.5-2.525 1.775T6.6 12Zm6-8q.425 0 .713-.288Q13 10.425 13 10V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288Zm0 .7Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandW100.displayName = 'AmauiIconMaterialNestCamStandW100';

export default IconMaterialNestCamStandW100;
