import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExperimentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExperimentW100Filled'

      short_name='Experiment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-172q-17.904 0-25.452-16Q167-204 178-218l234-284v-258h-60q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h256q5.95 0 9.975 4.035 4.025 4.035 4.025 10T617.975-764q-4.025 4-9.975 4h-60v258l234 284q11 14 3.452 30T760-172H200Zm80-68h400L544-400H416L280-240Z"/>
    </Icon>
  );
});

IconMaterialExperimentW100Filled.displayName = 'AmauiIconMaterialExperimentW100Filled';

export default IconMaterialExperimentW100Filled;
