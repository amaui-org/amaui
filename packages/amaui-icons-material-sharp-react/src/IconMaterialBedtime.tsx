import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bedtime'

      short_name='Bedtime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q1.35 0 2.613-.438 1.262-.437 2.312-1.262-1.45-.525-3.062-1.688-1.613-1.162-2.838-2.912T9.238 9.637q-.563-2.312.037-5.137-2.325.825-3.8 2.862Q4 9.4 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm0 2q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-2.05.825-3.863.825-1.812 2.25-3.175Q6.5 3.6 8.375 2.8 10.25 2 12.35 2 10.925 4.45 11 7.062q.075 2.613 1.275 4.788 1.2 2.175 3.388 3.6 2.187 1.425 4.987 1.525-1.3 2.275-3.575 3.65Q14.8 22 12 22Zm-1.525-9.75Z"/>
    </Icon>
  );
});

IconMaterialBedtime.displayName = 'AmauiIconMaterialBedtime';

export default IconMaterialBedtime;
