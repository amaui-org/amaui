import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicRoundedW100Filled'
      short_name='Topic'

      {...props}
    >
      <path d="M7 11.35H17Q17.15 11.35 17.25 11.25Q17.35 11.15 17.35 11Q17.35 10.85 17.25 10.75Q17.15 10.65 17 10.65H7Q6.85 10.65 6.75 10.75Q6.65 10.85 6.65 11Q6.65 11.15 6.75 11.25Q6.85 11.35 7 11.35ZM7 15.35H13Q13.15 15.35 13.25 15.25Q13.35 15.15 13.35 15Q13.35 14.85 13.25 14.75Q13.15 14.65 13 14.65H7Q6.85 14.65 6.75 14.75Q6.65 14.85 6.65 15Q6.65 15.15 6.75 15.25Q6.85 15.35 7 15.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.7Q10.825 6.3 10.963 6.35Q11.1 6.4 11.2 6.5L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialTopicRoundedW100Filled.displayName = 'AmauiIconMaterialTopicRoundedW100Filled';

export default IconMaterialTopicRoundedW100Filled;
