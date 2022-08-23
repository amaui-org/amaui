import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCoolOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOffSharpW100Filled'
      short_name='ModeCoolOff'

      {...props}
    >
      <path d="m19.4 16.5-4.125-4.15h-2.9l-.725-.725v-2.9L7.5 4.6q-.125-.125-.125-.263 0-.137.125-.262t.263-.125q.137 0 .237.125l3.65 3.675V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.75L16 4.075q.125-.125.263-.125.137 0 .237.125.125.125.125.262 0 .138-.125.263l-4.15 4.125v2.925h2.925L19.4 7.5q.125-.125.263-.125.137 0 .262.125.125.1.125.237 0 .138-.125.263l-3.675 3.65H21q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.75L19.925 16q.125.125.125.25t-.125.25q-.125.125-.262.125-.138 0-.263-.125Zm-.6 6.2-6.45-6.45V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.75L8 19.925q-.1.1-.237.1-.138 0-.263-.1-.125-.125-.125-.262 0-.138.125-.263l4-4-2.9-2.9-4 4q-.125.125-.262.125-.138 0-.263-.125-.1-.125-.1-.262 0-.138.1-.238l3.675-3.65H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.75L2.1 6l.5-.5 16.7 16.7Z"/>
    </Icon>
  );
});

IconMaterialModeCoolOffSharpW100Filled.displayName = 'AmauiIconMaterialModeCoolOffSharpW100Filled';

export default IconMaterialModeCoolOffSharpW100Filled;
