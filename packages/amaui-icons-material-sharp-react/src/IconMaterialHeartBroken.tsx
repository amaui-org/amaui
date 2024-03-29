import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartBroken = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBroken'

      short_name='HeartBroken'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 21.925q-3.35-3.375-5.337-5.45Q4.7 14.4 3.663 13.025q-1.038-1.375-1.351-2.35Q2 9.7 2 8.5q0-2.3 1.6-3.9T7.5 3q1.125 0 2.175.412 1.05.413 1.875 1.188L10 10h3l-.85 8.375L15 9h-3l1.775-5.3q.625-.35 1.313-.525Q15.775 3 16.5 3q2.3 0 3.9 1.6T22 8.5q0 1.2-.325 2.2-.325 1-1.375 2.387-1.05 1.388-3.025 3.451-1.975 2.062-5.25 5.387Zm-1.775-4.65L10.775 12H7.35l1.875-6.575q-.4-.2-.837-.313Q7.95 5 7.5 5 6.05 5 5.025 6.025 4 7.05 4 8.5q0 .775.287 1.55.288.775 1 1.762.713.988 1.926 2.3 1.212 1.313 3.037 3.163Zm4.7-1.2q2.775-2.825 3.913-4.5Q20 9.9 20 8.5q0-1.45-1.025-2.475Q17.95 5 16.5 5q-.275 0-.55.037-.275.038-.55.138L14.8 7h2.9ZM17.7 7ZM7.35 12Z"/>
    </Icon>
  );
});

IconMaterialHeartBroken.displayName = 'AmauiIconMaterialHeartBroken';

export default IconMaterialHeartBroken;
