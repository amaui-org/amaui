import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreFilled'

      short_name='Score'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm9-9h1.5V6H12Zm3.5 0h1.7l-2-3 2-3h-1.7l-2 3ZM7 12h4v-1.5H8.5v-.75H11V6H7v1.5h2.5v.75H7Zm6 7 6-6v-2.5l-6 6-4-4-4 4V19l4-4Z"/>
    </Icon>
  );
});

IconMaterialScoreFilled.displayName = 'AmauiIconMaterialScoreFilled';

export default IconMaterialScoreFilled;
