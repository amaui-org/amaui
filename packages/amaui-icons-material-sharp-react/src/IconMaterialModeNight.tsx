import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeNight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNight'

      short_name='ModeNight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 4h-.525q-.25 0-.475.05 1.425 1.65 2.213 3.687Q11.5 9.775 11.5 12t-.787 4.262Q9.925 18.3 8.5 19.95q.225.05.475.05H9.5q3.325 0 5.663-2.337Q17.5 15.325 17.5 12t-2.337-5.663Q12.825 4 9.5 4Zm0-2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175.788 1.825.788 3.9t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q11.575 22 9.5 22q-1.325 0-2.587-.337Q5.65 21.325 4.5 20.65 6.825 19.3 8.162 17 9.5 14.7 9.5 12T8.162 7Q6.825 4.7 4.5 3.35q1.15-.675 2.413-1.013Q8.175 2 9.5 2Zm2 10Z"/>
    </Icon>
  );
});

IconMaterialModeNight.displayName = 'AmauiIconMaterialModeNight';

export default IconMaterialModeNight;
