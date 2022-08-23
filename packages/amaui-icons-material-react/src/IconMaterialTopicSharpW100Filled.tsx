import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicSharpW100Filled'
      short_name='Topic'

      {...props}
    >
      <path d="M6.65 11.35H17.35V10.65H6.65ZM6.65 15.35H13.35V14.65H6.65ZM3.3 6.3H11L12 7.3H20.7V18.7H3.3Z"/>
    </Icon>
  );
});

IconMaterialTopicSharpW100Filled.displayName = 'AmauiIconMaterialTopicSharpW100Filled';

export default IconMaterialTopicSharpW100Filled;
