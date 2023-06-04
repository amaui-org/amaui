import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneratingTokensW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokensW100Filled'

      short_name='GeneratingTokens'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 18.7q-2.8 0-4.75-1.95Q3.2 14.8 3.2 12t1.95-4.75Q7.1 5.3 9.9 5.3t4.75 1.95Q16.6 9.2 16.6 12t-1.95 4.75Q12.7 18.7 9.9 18.7Zm-.6-3.6h1.2v-5h2v-.7H7.3v.7h2Zm9.1-8.175-.75-1.675-1.675-.75 1.675-.75.75-1.675.75 1.675 1.675.75-1.675.75Zm0 15-.75-1.675-1.675-.75 1.675-.75.75-1.675.75 1.675 1.675.75-1.675.75Z"/>
    </Icon>
  );
});

IconMaterialGeneratingTokensW100Filled.displayName = 'AmauiIconMaterialGeneratingTokensW100Filled';

export default IconMaterialGeneratingTokensW100Filled;
