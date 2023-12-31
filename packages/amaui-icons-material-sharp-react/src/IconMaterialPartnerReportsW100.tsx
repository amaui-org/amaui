import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPartnerReportsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartnerReportsW100'

      short_name='PartnerReports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-146v-148h28v120h612v-120h28v148H146Zm320-280v-368h28v368h-28Zm-10 130v-48h48v48h-48Z"/>
    </Icon>
  );
});

IconMaterialPartnerReportsW100.displayName = 'AmauiIconMaterialPartnerReportsW100';

export default IconMaterialPartnerReportsW100;
