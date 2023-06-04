import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthMetricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100Filled'

      short_name='HealthMetrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M332 916V724H140V590h212l75 112h26l71-215 69 103h227v134H628v192H332Zm104-251-69-103H140V428h192V236h296v192h192v134H607l-74-112h-26l-71 215Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100Filled.displayName = 'AmauiIconMaterialHealthMetricsW100Filled';

export default IconMaterialHealthMetricsW100Filled;
