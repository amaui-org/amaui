import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRefreshW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshW100'

      short_name='Refresh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.1 18.7q-2.8 0-4.75-1.95Q5.4 14.8 5.4 12t1.95-4.75Q9.3 5.3 12.1 5.3q1.8 0 3.35.888Q17 7.075 17.9 8.65V5.3h.7V10h-4.7v-.7h3.55q-.775-1.525-2.2-2.413Q13.825 6 12.1 6 9.6 6 7.85 7.75T6.1 12q0 2.5 1.75 4.25T12.1 18q1.925 0 3.475-1.1T17.75 14h.75q-.65 2.125-2.412 3.413Q14.325 18.7 12.1 18.7Z"/>
    </Icon>
  );
});

IconMaterialRefreshW100.displayName = 'AmauiIconMaterialRefreshW100';

export default IconMaterialRefreshW100;
