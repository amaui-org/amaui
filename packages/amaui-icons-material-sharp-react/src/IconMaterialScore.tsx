import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Score'

      short_name='Score'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm6-8.5 4 4 6-6V5H5v11.5Zm3-.5V6h1.5v6Zm3.5 0-2-3 2-3h1.7l-2 3 2 3ZM7 12V8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12Zm2 3-4 4h14v-6l-6 6Zm-4 4V5Z"/>
    </Icon>
  );
});

IconMaterialScore.displayName = 'AmauiIconMaterialScore';

export default IconMaterialScore;
