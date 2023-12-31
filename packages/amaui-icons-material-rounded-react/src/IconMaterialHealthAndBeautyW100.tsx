import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndBeautyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndBeautyW100'

      short_name='HealthAndBeauty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M656-132q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h146v-120H656q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h146v-120H656q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h146v-120H656q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h146v-120H656q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h142q26 0 43 17t17 43v500q0 26-17 43t-43 17H656Zm-380-28h84q10 0 18-5.5t12-15.5l101-280q4-11 0-22t-14-17l-131-78h-56l-131 78q-10 6-14 17t0 22l101 280q4 10 12 15.5t18 5.5Zm42-209Zm-98 197L119-451q-8-20-.659-40.348T145-523l145-87v-190q0-11 8.5-19.5T318-828q11 0 19.5 8.5T346-800v190l145 87q19.318 11.304 26.659 31.652Q525-471 517-451L416-172q-7 18-21.993 29-14.992 11-34.007 11h-84q-19.015 0-34.007-11Q227-154 220-172Z"/>
    </Icon>
  );
});

IconMaterialHealthAndBeautyW100.displayName = 'AmauiIconMaterialHealthAndBeautyW100';

export default IconMaterialHealthAndBeautyW100;
