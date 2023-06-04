import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadgeW100'

      short_name='EvMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M152 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm0-28h656q12 0 22-10t10-22V328q0-12-10-22t-22-10H152q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32 0V296v560Zm294-106q6 0 10-4t4-10q0-6-4-10t-10-4H274V590h100q6 0 10-4t4-10q0-6-4-10t-10-4H274V430h140q6 0 10-4t4-10q0-6-4-10t-10-4H276q-13 0-21.5 8.5T246 432v288q0 13 8.5 21.5T276 750h138Zm202-44-93-294q-2-5-5-7.5t-8-2.5q-8 0-12 6t-2 13l101 318q2 5 5.5 8t8.5 3h10q5 0 8.5-3t5.5-8l101-319q2-7-2-12.5t-12-5.5q-5 0-8 2.5t-5 7.5l-93 294Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadgeW100.displayName = 'AmauiIconMaterialEvMobiledataBadgeW100';

export default IconMaterialEvMobiledataBadgeW100;
