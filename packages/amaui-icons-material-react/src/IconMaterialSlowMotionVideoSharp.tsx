import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlowMotionVideoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlowMotionVideoSharp'
      short_name='SlowMotionVideo'

      {...props}
    >
      <path d="M7.1 5.7 5.65 4.25Q6.775 3.35 8.113 2.775Q9.45 2.2 11 2.05V4.05Q9.875 4.2 8.9 4.625Q7.925 5.05 7.1 5.7ZM2 11Q2.2 9.5 2.75 8.15Q3.3 6.8 4.25 5.7L5.65 7.1Q5 7.925 4.6 8.912Q4.2 9.9 4.05 11ZM4.25 18.3Q3.3 17.2 2.725 15.85Q2.15 14.5 2 13H4.05Q4.2 14.1 4.6 15.087Q5 16.075 5.65 16.9ZM13 21.95V19.95Q16.025 19.525 18.013 17.275Q20 15.025 20 12Q20 8.975 18.013 6.725Q16.025 4.475 13 4.05V2.05Q16.85 2.475 19.425 5.3Q22 8.125 22 12Q22 15.875 19.425 18.7Q16.85 21.525 13 21.95ZM10.95 21.95Q9.45 21.8 8.113 21.225Q6.775 20.65 5.65 19.75L7.05 18.3Q7.925 18.95 8.888 19.375Q9.85 19.8 10.95 19.95ZM9.5 16.5V7.5L16.5 12Z"/>
    </Icon>
  );
});

IconMaterialSlowMotionVideoSharp.displayName = 'AmauiIconMaterialSlowMotionVideoSharp';

export default IconMaterialSlowMotionVideoSharp;
