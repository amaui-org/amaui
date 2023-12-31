import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPartnerReportsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartnerReportsFilled'

      short_name='PartnerReports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-80q0-17 11.5-28.5T160-320q17 0 28.5 11.5T200-280v80h560v-80q0-17 11.5-28.5T800-320q17 0 28.5 11.5T840-280v80q0 33-23.5 56.5T760-120H200Zm280-160q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-160q-17 0-28.5-11.5T440-480v-320q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v320q0 17-11.5 28.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialPartnerReportsFilled.displayName = 'AmauiIconMaterialPartnerReportsFilled';

export default IconMaterialPartnerReportsFilled;
