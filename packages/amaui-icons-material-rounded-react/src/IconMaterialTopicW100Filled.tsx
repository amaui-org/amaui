import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicW100Filled'

      short_name='Topic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 11.35h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.9q.125 0 .263.05.137.05.237.15l.8.8h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialTopicW100Filled.displayName = 'AmauiIconMaterialTopicW100Filled';

export default IconMaterialTopicW100Filled;
