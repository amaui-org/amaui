import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearNightRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearNightRoundedW100'
      short_name='ClearNight'

      {...props}
    >
      <path d="M12 20q1.475 0 2.663-.462 1.187-.463 2.187-1.188-2.25-.775-3.937-2.175-1.688-1.4-2.713-3.213-1.025-1.812-1.375-3.937Q8.475 6.9 8.9 4.65q-2.15.875-3.512 2.937Q4.025 9.65 4.025 12q0 3.575 2.2 5.788Q8.425 20 12 20Zm0 .7q-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-2.775 1.513-4.95Q6.35 4.875 8.8 3.925q.425-.175.675.05.25.225.15.725-.425 2.175-.087 4.212.337 2.038 1.325 3.763.987 1.725 2.587 3.037 1.6 1.313 3.7 2.013.475.15.55.5.075.35-.275.625-1.1.875-2.513 1.362Q13.5 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialClearNightRoundedW100.displayName = 'AmauiIconMaterialClearNightRoundedW100';

export default IconMaterialClearNightRoundedW100;
