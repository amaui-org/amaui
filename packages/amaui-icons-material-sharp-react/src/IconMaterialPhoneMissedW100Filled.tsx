import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneMissedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedW100Filled'

      short_name='PhoneMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.1 19.675 1.325 16.95q2.25-2.4 5.025-3.6 2.775-1.2 5.675-1.2t5.675 1.2q2.775 1.2 5.025 3.6l-2.775 2.725-3.275-2.475v-3.5q-1.2-.425-2.375-.638-1.175-.212-2.275-.212-1.1 0-2.275.212-1.175.213-2.375.638v3.5ZM11.975 10l-5.6-5.6v3.5h-.7V3.2h4.7v.7h-3.5l5.1 5.1 5.65-5.65.5.5Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedW100Filled.displayName = 'AmauiIconMaterialPhoneMissedW100Filled';

export default IconMaterialPhoneMissedW100Filled;
