import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicSharpW700Filled'
      short_name='Topic'

      {...props}
    >
      <path d="M6 12H18V10H6ZM6 16H14V14H6ZM1.15 2.775H9.625L12 5.15H22.85V20.85H1.15Z"/>
    </Icon>
  )
});

export default IconMaterialTopicSharpW700Filled;
