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
      <path d="M7 11.35h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.9q.125 0 .263.05.137.05.237.15l.8.8h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-1-1H4.8q-.35 0-.575.225Q4 7.45 4 7.8Zm0 0V7v11V17.2Z"/>
    </Icon>
  );
});

IconMaterialTopicW100.displayName = 'AmauiIconMaterialTopicW100';

export default IconMaterialTopicW100;
