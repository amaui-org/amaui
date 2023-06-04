import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicW100'

      short_name='Topic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 11.35h10.7v-.7H6.65Zm0 4h6.7v-.7h-6.7ZM3.3 6.3H11l1 1h8.7v11.4H3.3ZM4 7v11h16V8h-8.275l-1-1Zm0 11V7v11Z"/>
    </Icon>
  );
});

IconMaterialTopicW100.displayName = 'AmauiIconMaterialTopicW100';

export default IconMaterialTopicW100;
