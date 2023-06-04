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
      <path d="M12.1 18.7q-2.8 0-4.75-1.95Q5.4 14.8 5.4 12t1.95-4.75Q9.3 5.3 12.1 5.3q1.8 0 3.35.888Q17 7.075 17.9 8.65v-3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.212.537-.213.213-.538.213h-3.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.2q-.775-1.525-2.2-2.413Q13.825 6 12.1 6 9.6 6 7.85 7.75T6.1 12q0 2.5 1.75 4.25T12.1 18q1.875 0 3.4-1.025t2.175-2.75q.05-.1.125-.163.075-.062.2-.062.2 0 .3.137.1.138.025.338Q17.6 16.4 15.9 17.55q-1.7 1.15-3.8 1.15Z"/>
    </Icon>
  );
});

IconMaterialRefreshW100.displayName = 'AmauiIconMaterialRefreshW100';

export default IconMaterialRefreshW100;
