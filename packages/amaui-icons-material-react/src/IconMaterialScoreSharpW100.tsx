import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreSharpW100'
      short_name='Score'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM9 13.5 13 17.5 19 11.5V5H5V17.5ZM12.4 11.6V6.4H13.1V11.6ZM15.3 11.6 13.1 9 15.3 6.4H16.2L14 9L16.2 11.6ZM7.4 11.6V8.65H9.9V7.1H7.4V6.4H10.6V9.35H8.1V10.9H10.6V11.6ZM9 14.5 5 18.5V19H19V12.5L13 18.5ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialScoreSharpW100.displayName = 'AmauiIconMaterialScoreSharpW100';

export default IconMaterialScoreSharpW100;
