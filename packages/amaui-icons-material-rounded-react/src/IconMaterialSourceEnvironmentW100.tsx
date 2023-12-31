import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceEnvironmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceEnvironmentW100'

      short_name='SourceEnvironment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-194v-604q0-7.692 3.5-13.846T131-823l144-98q7.73-5 16.865-5Q301-926 309-921l144 98q6 5 9.5 11.154T466-798v126h346q12.75 0 21.375 8.625T842-642v448q0 12.75-8.625 21.375T812-164H148q-12.75 0-21.375-8.625T118-194Zm28 2h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 0h132v-132H306v132Zm0 480h508v-452H306v452Zm274-320h100q5.95 0 9.975 4.035 4.025 4.035 4.025 10T689.975-488q-4.025 4-9.975 4H580q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm0 160h100q5.95 0 9.975 4.035 4.025 4.035 4.025 10T689.975-328q-4.025 4-9.975 4H580q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4ZM466-497.965q0 5.965-4.035 9.965t-10 4Q446-484 442-488.035t-4-10q0-5.965 4.035-9.965t10-4q5.965 0 9.965 4.035t4 10ZM451.965-324Q446-324 442-328.035t-4-10q0-5.965 4.035-9.965t10-4q5.965 0 9.965 4.035t4 10q0 5.965-4.035 9.965t-10 4Z"/>
    </Icon>
  );
});

IconMaterialSourceEnvironmentW100.displayName = 'AmauiIconMaterialSourceEnvironmentW100';

export default IconMaterialSourceEnvironmentW100;
