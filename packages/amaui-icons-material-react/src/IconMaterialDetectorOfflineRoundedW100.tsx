import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorOfflineRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineRoundedW100'
      short_name='DetectorOffline'

      {...props}
    >
      <path d="m9.4 19.15-.475-.475 2.6-2.6-2.6-2.6L9.4 13l2.6 2.6 2.6-2.6.475.475-2.6 2.6 2.6 2.6-.475.475-2.6-2.6ZM5.8 7.55h12.4q.35 0 .575-.225Q19 7.1 19 6.75v-1.2H5v1.2q0 .35.225.575.225.225.575.225Zm2.85 2.7h6.7q.25 0 .45-.137.2-.138.3-.388l.55-1.475h-9.3l.55 1.475q.1.25.3.388.2.137.45.137Zm0 .7q-.475 0-.862-.262-.388-.263-.563-.713L6.6 8.25h-.8q-.625 0-1.062-.438Q4.3 7.375 4.3 6.75v-1.9h15.4v1.9q0 .625-.437 1.062-.438.438-1.063.438h-.8l-.675 1.725q-.175.425-.55.7-.375.275-.85.275ZM5 7.55v-2 2Z"/>
    </Icon>
  );
});

IconMaterialDetectorOfflineRoundedW100.displayName = 'AmauiIconMaterialDetectorOfflineRoundedW100';

export default IconMaterialDetectorOfflineRoundedW100;
