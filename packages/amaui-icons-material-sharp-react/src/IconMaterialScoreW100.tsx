import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreW100'

      short_name='Score'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM9 13.5l4 4 6-6V5H5v12.5Zm3.4-1.9V6.4h.7v5.2Zm2.9 0L13.1 9l2.2-2.6h.9L14 9l2.2 2.6Zm-7.9 0V8.65h2.5V7.1H7.4v-.7h3.2v2.95H8.1v1.55h2.5v.7ZM9 14.5l-4 4v.5h14v-6.5l-6 6ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialScoreW100.displayName = 'AmauiIconMaterialScoreW100';

export default IconMaterialScoreW100;
