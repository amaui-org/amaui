import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbIncandescentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentFilled'

      short_name='WbIncandescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-3h2v3Zm-9-9v-2h3v2Zm17 0v-2h3v2Zm-1 6.9-2.1-2.1 1.4-1.4 2.1 2.1Zm-12 0-1.4-1.4 2.1-2.1 1.4 1.4Zm6-2.9q-2.075 0-3.537-1.463Q7 14.075 7 12q0-1.2.538-2.238Q8.075 8.725 9 8V3h6v5q.925.725 1.462 1.762Q17 10.8 17 12q0 2.075-1.462 3.537Q14.075 17 12 17Zm-1-9.9q.25-.05.5-.075Q11.75 7 12 7t.5.025q.25.025.5.075V5h-2Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentFilled.displayName = 'AmauiIconMaterialWbIncandescentFilled';

export default IconMaterialWbIncandescentFilled;
