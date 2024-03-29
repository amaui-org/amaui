import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendAndArchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchive'

      short_name='SendAndArchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.5 18.1-1.45-1.45q-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35l2.125 2.125q.225.225.525.225.3 0 .525-.225l2.125-2.125q.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15L17.5 18.1v-3.6q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35ZM3 18.5q0 .55.45.837.45.288.95.088L10 17.05V17q0-.6.1-1.163.1-.562.3-1.137L5 17v-3.5l6-1.5-6-1.5V7l8.85 3.75q.725-.35 1.5-.55.775-.2 1.65-.2h.3L4.375 4.575q-.5-.2-.937.087Q3 4.95 3 5.5ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22ZM5 14.7V17 7v7.7Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchive.displayName = 'AmauiIconMaterialSendAndArchive';

export default IconMaterialSendAndArchive;
