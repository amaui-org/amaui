import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthMetricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100'

      short_name='HealthMetrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M392 916q-25 0-42.5-17.5T332 856V724H200q-25 0-42.5-17.5T140 664V488q0-25 17.5-42.5T200 428h132V296q0-25 17.5-42.5T392 236h176q25 0 42.5 17.5T628 296v132h132q25 0 42.5 17.5T820 488v176q0 25-17.5 42.5T760 724H628v132q0 25-17.5 42.5T568 916H392ZM168 562h192q4 0 6.5 1.5t4.5 4.5l65 97 71-213q2-5 5-7.5t8-2.5q4 0 7 1.5t5 4.5l75 114h185v-74q0-14-9-23t-23-9H630q-13 0-21.5-8.5T600 426V296q0-14-9-23t-23-9H392q-14 0-23 9t-9 23v130q0 13-8.5 21.5T330 456H200q-14 0-23 9t-9 23v74Zm0 28v74q0 14 9 23t23 9h130q13 0 21.5 8.5T360 726v130q0 14 9 23t23 9h176q14 0 23-9t9-23V726q0-13 8.5-21.5T630 696h130q14 0 23-9t9-23v-74H600q-4 0-7-2t-5-5l-64-96-71 213q-2 5-5.5 7.5T439 710q-4 0-6.5-1.5T428 704l-76-114H168Zm-28 0h28v74q0 14 9 23t23 9h130q13 0 21.5 8.5T360 726v130q0 14 9 23t23 9h176q14 0 23-9t9-23V726q0-13 8.5-21.5T630 696h130q14 0 23-9t9-23v-74h28v-28h-28v-74q0-14-9-23t-23-9H630q-13 0-21.5-8.5T600 426V296q0-14-9-23t-23-9H392q-14 0-23 9t-9 23v130q0 13-8.5 21.5T330 456H200q-14 0-23 9t-9 23v74h-28v28Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100.displayName = 'AmauiIconMaterialHealthMetricsW100';

export default IconMaterialHealthMetricsW100;
