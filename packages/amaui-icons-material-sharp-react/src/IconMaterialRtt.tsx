import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRtt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rtt'

      short_name='Rtt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.125 21 .4-2.55h2.325l2.05-12.9h-2.5l-.725 4.5h-2.65L9.15 3h12.975L21 10.05h-2.65l.7-4.5h-2.5l-2.05 12.9h2.325l-.4 2.55ZM3.75 7l.325-2h3.75L7.5 7Zm-.625 4 .325-2H7.2l-.325 2Zm-1.25 8 .3-2h6.25l-.3 2Zm.625-4 .325-2h6.25l-.325 2Z"/>
    </Icon>
  );
});

IconMaterialRtt.displayName = 'AmauiIconMaterialRtt';

export default IconMaterialRtt;
