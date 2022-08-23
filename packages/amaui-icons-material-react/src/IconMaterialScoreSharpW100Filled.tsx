import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreSharpW100Filled'
      short_name='Score'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM12.4 11.6H13.1V6.4H12.4ZM15.3 11.6H16.2L14 9L16.2 6.4H15.3L13.1 9ZM7.4 11.6H10.6V10.9H8.1V9.35H10.6V6.4H7.4V7.1H9.9V8.65H7.4ZM13 18.5 19 12.5V11.5L13 17.5L9 13.5L5 17.5V18.5L9 14.5Z"/>
    </Icon>
  );
});

IconMaterialScoreSharpW100Filled.displayName = 'AmauiIconMaterialScoreSharpW100Filled';

export default IconMaterialScoreSharpW100Filled;
