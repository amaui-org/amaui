import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClearNightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearNightFilled'

      short_name='ClearNight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q1.35 0 2.613-.438 1.262-.437 2.312-1.262-1.45-.525-3.062-1.688-1.613-1.162-2.838-2.912T9.238 9.637q-.563-2.312.037-5.137-2.325.825-3.8 2.862Q4 9.4 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm0 2q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-3.675 2.312-6.475 2.313-2.8 6.188-3.4.725-.125 1.038.337.312.463.037 1.213-.75 2.1-.525 4.237.225 2.138 1.225 3.938 1 1.8 2.688 3.112 1.687 1.313 3.862 1.788.8.175 1.012.675.213.5-.262 1.05Q18.2 20.1 16.238 21.05 14.275 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialClearNightFilled.displayName = 'AmauiIconMaterialClearNightFilled';

export default IconMaterialClearNightFilled;
