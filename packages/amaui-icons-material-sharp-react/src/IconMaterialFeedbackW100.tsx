import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedbackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedbackW100'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-390q8.5 0 14.25-5.75T500-410q0-8.5-5.75-14.25T480-430q-8.5 0-14.25 5.75T460-410q0 8.5 5.75 14.25T480-390Zm-14-106h28v-244h-28v244ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFeedbackW100.displayName = 'AmauiIconMaterialFeedbackW100';

export default IconMaterialFeedbackW100;
