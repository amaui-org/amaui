import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotListedLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationW100Filled'

      short_name='NotListedLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.175q.225 0 .388-.163.162-.162.162-.387t-.162-.388q-.163-.162-.388-.162t-.387.162q-.163.163-.163.388t.163.387q.162.163.387.163Zm.025-2.65q.125 0 .225-.1t.125-.225q.025-.2.075-.337.05-.138.15-.288.15-.225.363-.475.212-.25.587-.625.475-.475.688-.913.212-.437.212-.987 0-.95-.687-1.55-.688-.6-1.663-.6-.7 0-1.3.313-.6.312-.95.887-.1.125-.05.275.05.15.225.225.125.05.237.012.113-.037.188-.162.275-.425.688-.637.412-.213.962-.213.65 0 1.15.4.5.4.5 1.05 0 .475-.2.837-.2.363-.75.863-.325.3-.55.575-.225.275-.35.55-.1.2-.15.375-.05.175-.075.375-.025.15.087.262.113.113.263.113ZM12 21.2q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationW100Filled.displayName = 'AmauiIconMaterialNotListedLocationW100Filled';

export default IconMaterialNotListedLocationW100Filled;
