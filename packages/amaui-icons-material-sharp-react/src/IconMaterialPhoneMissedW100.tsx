import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneMissedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedW100'

      short_name='PhoneMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.1 19.675 1.325 16.95q2.25-2.4 5.025-3.6 2.775-1.2 5.675-1.2t5.675 1.2q2.775 1.2 5.025 3.6l-2.775 2.725-3.275-2.475v-3.5q-1.2-.425-2.375-.638-1.175-.212-2.275-.212-1.1 0-2.275.212-1.175.213-2.375.638v3.5Zm.075-.925 2.5-1.9v-2.9q-1.25.575-2.4 1.35-1.15.775-1.95 1.6Zm15.7 0 1.9-1.8q-.975-.9-2.05-1.65-1.075-.75-2.35-1.35v2.85Zm-7.9-8.75-5.6-5.6v3.5h-.7V3.2h4.7v.7h-3.5l5.1 5.1 5.65-5.65.5.5Zm5.4 3.95Zm-10.7 0Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedW100.displayName = 'AmauiIconMaterialPhoneMissedW100';

export default IconMaterialPhoneMissedW100;
