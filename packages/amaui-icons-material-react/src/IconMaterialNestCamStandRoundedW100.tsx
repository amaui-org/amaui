import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamStandRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandRoundedW100'
      short_name='NestCamStand'

      {...props}
    >
      <path d="M6.875 19.7q-.65 0-1.1-.488-.45-.487-.4-1.137L5.9 11.9q.175-1.95 1.387-3.4Q8.5 7.05 10.3 6.55V6q0-.725.488-1.213Q11.275 4.3 12 4.3t1.213.487Q13.7 5.275 13.7 6v.55q1.8.5 3.025 1.95 1.225 1.45 1.4 3.4l.525 6.175q.05.65-.4 1.137-.45.488-1.1.488Zm0-.7h10.25q.35 0 .6-.262.25-.263.2-.613L17.4 12q-.125-1.675-1.15-2.95-1.025-1.275-2.55-1.775V10q0 .725-.487 1.212-.488.488-1.213.488-.725 0-1.212-.488Q10.3 10.725 10.3 10V7.275q-1.5.5-2.525 1.775T6.6 12l-.525 6.125q-.05.35.2.613.25.262.6.262ZM12 11q.425 0 .713-.288Q13 10.425 13 10V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288Zm0 .7Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandRoundedW100.displayName = 'AmauiIconMaterialNestCamStandRoundedW100';

export default IconMaterialNestCamStandRoundedW100;
