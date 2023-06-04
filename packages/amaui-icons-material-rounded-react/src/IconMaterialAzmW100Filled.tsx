import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmW100Filled'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M635 441v221q0 9.917 9.5 13.458Q654 679 661 672l59-59q8-8 13-19.278 5-11.278 5-23.722V368q0-24.75-17.625-42.375T678 308H476q-12.444 0-23.722 5T433 326l-59 59q-7 7-3.458 16.5Q374.083 411 384 411h221q12.75 0 21.375 8.625T635 441ZM452 624v221q0 9.917 9.5 13.458Q471 862 478 855l59-59q8-8 13-19.278 5-11.278 5-23.722V551q0-24.75-17.625-42.375T495 491H293q-12.444 0-23.722 5T250 509l-59 59q-7 7-3.458 16.5Q191.083 594 201 594h221q12.75 0 21.375 8.625T452 624Z"/>
    </Icon>
  );
});

IconMaterialAzmW100Filled.displayName = 'AmauiIconMaterialAzmW100Filled';

export default IconMaterialAzmW100Filled;
