import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageHistory'

      short_name='ManageHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 3q3.75 0 6.375 2.625T21 12h-2q0-2.925-2.038-4.963Q14.925 5 12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475Q9.95 3 12 3Zm-1 4h2v4.6l1.4 1.4-1.05 1.75L11 12.4Zm-7.95 6H5.1q.3 2.325 1.913 3.938 1.612 1.612 3.862 1.962l1.2 2.1q-3.45 0-6.05-2.288Q3.425 16.425 3.05 13Zm14.925 11-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.325-.05-.65t.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262l.3-1.5h2l.3 1.5q.3.125.575.287.275.163.525.363l1.45-.5 1 1.75-1.15 1q.05.325.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262l-.3 1.5Zm1-3q.825 0 1.413-.587.587-.588.587-1.413 0-.825-.587-1.413Q19.8 17 18.975 17q-.825 0-1.413.587-.587.588-.587 1.413 0 .825.587 1.413.588.587 1.413.587Z"/>
    </Icon>
  );
});

IconMaterialManageHistory.displayName = 'AmauiIconMaterialManageHistory';

export default IconMaterialManageHistory;
