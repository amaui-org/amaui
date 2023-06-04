import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicFilled'

      short_name='Topic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12h12v-2H6Zm0 4h8v-2H6ZM2 4h8l2 2h10v14H2Z"/>
    </Icon>
  );
});

IconMaterialTopicFilled.displayName = 'AmauiIconMaterialTopicFilled';

export default IconMaterialTopicFilled;
