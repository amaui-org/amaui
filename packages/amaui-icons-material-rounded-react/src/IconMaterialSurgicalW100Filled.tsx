import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurgicalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurgicalW100Filled'

      short_name='Surgical'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m536 843 28-28h309q6 0 10 4t4 10q0 6-4 10t-10 4H536Zm-79-173-76-76 266-266q9-9 21-9t21 9l34 34q9 9 9 21t-9 21L457 670ZM236 844q-22 0-43-5t-41-16l186-186 67 67q7 7 11.5 15.5T421 738q0 10-4 19t-11 16l-19 20q-25 26-58.5 38.5T260 844h-24Z"/>
    </Icon>
  );
});

IconMaterialSurgicalW100Filled.displayName = 'AmauiIconMaterialSurgicalW100Filled';

export default IconMaterialSurgicalW100Filled;
