import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitoringFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringFilled'

      short_name='Monitoring'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2l2-2v4Zm4 0v-6l2-2v8Zm4 0v-8l2 2.025V21Zm4 0v-5.975l2-2V21Zm4 0V11l2-2v12ZM3 15.825V13l7-7 4 4 7-7v2.825l-7 7-4-4Z"/>
    </Icon>
  );
});

IconMaterialMonitoringFilled.displayName = 'AmauiIconMaterialMonitoringFilled';

export default IconMaterialMonitoringFilled;
