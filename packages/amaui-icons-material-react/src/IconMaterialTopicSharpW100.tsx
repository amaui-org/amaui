import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicSharpW100'
      short_name='Topic'

      {...props}
    >
      <path d="M6.65 11.35H17.35V10.65H6.65ZM6.65 15.35H13.35V14.65H6.65ZM3.3 6.3H11L12 7.3H20.7V18.7H3.3ZM4 7V18H20V8H11.725L10.725 7ZM4 18V7V8V18Z"/>
    </Icon>
  );
});

export default IconMaterialTopicSharpW100;
