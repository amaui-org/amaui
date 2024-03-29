import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyLira = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLira'

      short_name='CurrencyLira'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-5.15l-3 1.875V15.35l3-1.875v-2.35L6 13v-2.35l3-1.9V3h2v4.5L15 5v2.35l-4 2.525v2.35l4-2.5v2.35L11 14.6V19q2.075 0 3.538-1.462Q16 16.075 16 14h2q0 2.925-2.037 4.962Q13.925 21 11 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLira.displayName = 'AmauiIconMaterialCurrencyLira';

export default IconMaterialCurrencyLira;
