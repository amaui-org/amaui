import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicSharp'
      short_name='Topic'

      {...props}
    >
      <path d="M6 12H18V10H6ZM6 16H14V14H6ZM2 4H10L12 6H22V20H2ZM4 6V18H20V8H11.175L9.175 6ZM4 18V6V8V18Z"/>
    </Icon>
  );
});

IconMaterialTopicSharp.displayName = 'AmauiIconMaterialTopicSharp';

export default IconMaterialTopicSharp;
