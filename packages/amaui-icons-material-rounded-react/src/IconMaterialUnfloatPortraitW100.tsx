import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatPortraitW100'

      short_name='UnfloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 924q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v302q0 6-4 10t-10 4q-6 0-10-4t-4-10V288q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v576q0 14 9 23t23 9h222q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm76-541 176 177q4 5 9.5 5t10.5-5q5-5 5-10t-5-10L368 364h126q6 0 10-4t4-10q0-6-4-10t-10-4H350q-13 0-21.5 8.5T320 366v144q0 6 4 10t10 4q6 0 10-4t4-10V383Zm290 541q-13 0-21.5-8.5T608 894V734q0-13 8.5-21.5T638 704h80q13 0 21.5 8.5T748 734v160q0 13-8.5 21.5T718 924h-80Zm-130-28H272q-14 0-23-9t-9-23V288q0-14 9-23t23-9h416q14 0 23 9t9 23v316H568q-25 0-42.5 17.5T508 664v232Z"/>
    </Icon>
  );
});

IconMaterialUnfloatPortraitW100.displayName = 'AmauiIconMaterialUnfloatPortraitW100';

export default IconMaterialUnfloatPortraitW100;
