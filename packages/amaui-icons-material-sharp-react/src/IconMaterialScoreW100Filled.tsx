import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreW100Filled'

      short_name='Score'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm8.1-8.1h.7V6.4h-.7Zm2.9 0h.9L14 9l2.2-2.6h-.9L13.1 9Zm-7.9 0h3.2v-.7H8.1V9.35h2.5V6.4H7.4v.7h2.5v1.55H7.4Zm5.6 6.9 6-6v-1l-6 6-4-4-4 4v1l4-4Z"/>
    </Icon>
  );
});

IconMaterialScoreW100Filled.displayName = 'AmauiIconMaterialScoreW100Filled';

export default IconMaterialScoreW100Filled;
