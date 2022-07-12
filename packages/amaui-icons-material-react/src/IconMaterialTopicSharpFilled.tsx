import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicSharpFilled'
      short_name='Topic'

      {...props}
    >
      <path d="M6 12H18V10H6ZM6 16H14V14H6ZM2 4H10L12 6H22V20H2Z"/>
    </Icon>
  )
});

export default IconMaterialTopicSharpFilled;
