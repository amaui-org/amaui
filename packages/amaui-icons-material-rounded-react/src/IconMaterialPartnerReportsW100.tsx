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
      <path d="M206-146q-26 0-43-17t-17-43v-74q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v74q0 12 10 22t22 10h548q12 0 22-10t10-22v-74q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v74q0 26-17 43t-43 17H206Zm274.14-150Q470-296 463-302.86q-7-6.859-7-17 0-10.14 6.86-17.14 6.859-7 17-7 10.14 0 17.14 6.86 7 6.859 7 17 0 10.14-6.86 17.14-6.859 7-17 7Zm-.175-130Q474-426 470-430.025T466-440v-340q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v340q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialPartnerReportsW100.displayName = 'AmauiIconMaterialPartnerReportsW100';

export default IconMaterialPartnerReportsW100;
