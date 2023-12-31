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
      <path d="M120-120v-200h80v120h560v-120h80v200H120Zm320-320v-400h80v400h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialPartnerReportsFilled.displayName = 'AmauiIconMaterialPartnerReportsFilled';

export default IconMaterialPartnerReportsFilled;
