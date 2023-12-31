import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedbackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedbackW100Filled'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-390q8.5 0 14.25-5.75T500-410q0-8.5-5.75-14.25T480-430q-8.5 0-14.25 5.75T460-410q0 8.5 5.75 14.25T480-390Zm.035-106q5.965 0 9.965-4.025t4-9.975v-216q0-5.95-4.035-9.975-4.035-4.025-10-4.025T470-735.975q-4 4.025-4 9.975v216q0 2.8 1.053 5.425 1.052 2.625 2.982 4.55 1.93 1.925 4.561 2.975 2.632 1.05 5.439 1.05ZM244-292l-61 61q-14 14-32.5 6.344T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialFeedbackW100Filled.displayName = 'AmauiIconMaterialFeedbackW100Filled';

export default IconMaterialFeedbackW100Filled;
