import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicOutlinedW700Filled'
      short_name='Topic'

      {...props}
    >
      <path d="M6 12H18V10H6ZM6 16H14V14H6ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V5.925Q1.15 4.6 2.062 3.687Q2.975 2.775 4.3 2.775H9.625L12 5.15H19.7Q21.025 5.15 21.938 6.062Q22.85 6.975 22.85 8.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialTopicOutlinedW700Filled;
