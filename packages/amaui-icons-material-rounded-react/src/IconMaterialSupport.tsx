import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupport = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Support'

      short_name='Support'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-2.9-2.55 1.2-2.75q-1.05-.375-1.812-1.163Q7.725 14.75 7.3 13.7l-2.75 1.15q.575 1.6 1.775 2.8 1.2 1.2 2.775 1.8ZM7.3 10.3q.425-1.05 1.188-1.837Q9.25 7.675 10.3 7.3L9.15 4.55q-1.6.6-2.8 1.8-1.2 1.2-1.8 2.8ZM12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm2.9 4.45q1.575-.6 2.763-1.787 1.187-1.188 1.787-2.763l-2.75-1.2q-.375 1.05-1.15 1.812-.775.763-1.8 1.188Zm1.8-9.2 2.75-1.15q-.6-1.575-1.787-2.763Q16.475 5.15 14.9 4.55l-1.15 2.8q1.025.375 1.775 1.137.75.763 1.175 1.763Z"/>
    </Icon>
  );
});

IconMaterialSupport.displayName = 'AmauiIconMaterialSupport';

export default IconMaterialSupport;
