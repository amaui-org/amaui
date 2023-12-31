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
      <path d="M200-172q-18 0-25.5-16t3.5-30l234-284v-258h-74v-28h284v28h-74v258l234 284q11 14 3.5 30T760-172H200Zm80-68h400L544-400H416L280-240Z"/>
    </Icon>
  );
});

IconMaterialExperimentW100Filled.displayName = 'AmauiIconMaterialExperimentW100Filled';

export default IconMaterialExperimentW100Filled;
