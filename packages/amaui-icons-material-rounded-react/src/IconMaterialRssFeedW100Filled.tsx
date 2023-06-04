import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRssFeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedW100Filled'

      short_name='RssFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20t.287-.712Q4.575 19 5 19t.713.288Q6 19.575 6 20t-.287.712Q5.425 21 5 21Zm13.5 0q-.2 0-.35-.15-.15-.15-.15-.35-.1-2.75-1.188-5.163-1.087-2.412-2.912-4.237-1.825-1.825-4.237-2.913Q7.25 7.1 4.5 7q-.2 0-.35-.15Q4 6.7 4 6.5q0-.2.15-.35Q4.3 6 4.5 6q2.95.1 5.55 1.275 2.6 1.175 4.55 3.125 1.95 1.95 3.125 4.55Q18.9 17.55 19 20.5q0 .2-.15.35-.15.15-.35.15Zm-6 0q-.2 0-.35-.15-.15-.15-.175-.35-.2-3.025-2.325-5.15-2.125-2.125-5.15-2.325-.2-.025-.35-.175Q4 12.7 4 12.5q0-.2.15-.35.15-.15.35-.125 3.425.2 5.85 2.625t2.625 5.85q.025.2-.125.35-.15.15-.35.15Z"/>
    </Icon>
  );
});

IconMaterialRssFeedW100Filled.displayName = 'AmauiIconMaterialRssFeedW100Filled';

export default IconMaterialRssFeedW100Filled;
