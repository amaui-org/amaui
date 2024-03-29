import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectedTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTv'

      short_name='ConnectedTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16h2q0-.825-.588-1.413Q5.825 14 5 14Zm4.275 0q.3 0 .513-.225.212-.225.162-.5-.25-1.65-1.412-2.813Q7.375 11.3 5.725 11.05q-.275-.05-.5.15-.225.2-.225.525 0 .275.2.513.2.237.525.287 1.05.2 1.8.95t.95 1.8q.05.325.287.525.238.2.513.2Zm3 0q.3 0 .513-.225.212-.225.187-.5-.275-2.9-2.312-4.938Q8.625 8.3 5.725 8.025 5.45 8 5.225 8.2 5 8.4 5 8.725q0 .275.213.5.212.225.512.275 2.3.25 3.912 1.863 1.613 1.612 1.863 3.912.05.3.263.512.212.213.512.213ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialConnectedTv.displayName = 'AmauiIconMaterialConnectedTv';

export default IconMaterialConnectedTv;
