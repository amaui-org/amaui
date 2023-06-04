import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRssFeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedW100'

      short_name='RssFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.712Q4.6 19 5 19q.425 0 .713.288Q6 19.575 6 20q0 .4-.287.7-.288.3-.713.3Zm13 0q0-2.9-1.1-5.438-1.1-2.537-3.012-4.45Q11.975 9.2 9.438 8.1 6.9 7 4 7V6q3.1 0 5.825 1.188 2.725 1.187 4.763 3.224 2.037 2.038 3.224 4.763Q19 17.9 19 21Zm-6 0q0-3.325-2.338-5.662Q7.325 13 4 13v-1q1.85 0 3.488.712 1.637.713 2.862 1.938t1.938 2.862Q13 19.15 13 21Z"/>
    </Icon>
  );
});

IconMaterialRssFeedW100.displayName = 'AmauiIconMaterialRssFeedW100';

export default IconMaterialRssFeedW100;
