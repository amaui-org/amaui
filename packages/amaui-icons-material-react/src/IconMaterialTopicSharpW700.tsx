import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicSharpW700'
      short_name='Topic'

      {...props}
    >
      <path d="M6 12H18V10H6ZM6 16H14V14H6ZM1.15 2.775H9.625L12 5.15H22.85V20.85H1.15ZM4.3 5.925V17.7H19.7V8.3H10.7L8.325 5.925ZM4.3 17.7V5.925V8.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialTopicSharpW700;
