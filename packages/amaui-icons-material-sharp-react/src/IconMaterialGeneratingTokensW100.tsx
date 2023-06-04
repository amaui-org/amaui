import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneratingTokensW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokensW100'

      short_name='GeneratingTokens'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 18.7q-2.8 0-4.75-1.95Q3.2 14.8 3.2 12t1.95-4.75Q7.1 5.3 9.9 5.3t4.75 1.95Q16.6 9.2 16.6 12t-1.95 4.75Q12.7 18.7 9.9 18.7Zm0-.7q2.5 0 4.25-1.75T15.9 12q0-2.5-1.75-4.25T9.9 6Q7.4 6 5.65 7.75T3.9 12q0 2.5 1.75 4.25T9.9 18Zm-.6-2.9h1.2v-5h2v-.7H7.3v.7h2Zm9.1-8.175-.75-1.675-1.675-.75 1.675-.75.75-1.675.75 1.675 1.675.75-1.675.75Zm0 15-.75-1.675-1.675-.75 1.675-.75.75-1.675.75 1.675 1.675.75-1.675.75ZM9.9 12Z"/>
    </Icon>
  );
});

IconMaterialGeneratingTokensW100.displayName = 'AmauiIconMaterialGeneratingTokensW100';

export default IconMaterialGeneratingTokensW100;
