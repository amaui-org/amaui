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
      <path d="M332 916V724H140V428h192V236h296v192h192v296H628v192H332ZM168 562h199l69 103 71-215h26l74 112h185V456H600V264H360v192H168v106Zm192 326h240V696h192V590H593l-69-103-71 215h-26l-75-112H168v106h192v192Zm120-312Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100.displayName = 'AmauiIconMaterialHealthMetricsW100';

export default IconMaterialHealthMetricsW100;
