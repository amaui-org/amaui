import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalDisconnected = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalDisconnected'

      short_name='SignalDisconnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.1 14.275-1.225-1.225q.55-.65.837-1.438Q17 10.825 17 10q0-.9-.375-1.825Q16.25 7.25 15.5 6.5l1.2-1.2q.975.975 1.488 2.2.512 1.225.512 2.5 0 1.15-.4 2.237-.4 1.088-1.2 2.038ZM14.125 11.3 10.7 7.875q.275-.175.612-.275.338-.1.688-.1 1.05 0 1.775.725.725.725.725 1.775 0 .35-.1.675-.1.325-.275.625Zm5.375 5.35-1.2-1.2q1.025-1.175 1.512-2.588Q20.3 11.45 20.3 10q0-1.575-.6-3.138Q19.1 5.3 17.9 4.1l1.2-1.2q1.425 1.5 2.163 3.325Q22 8.05 22 10q0 1.825-.6 3.512-.6 1.688-1.9 3.138Zm.275 5.95L13 15.825V21h-2v-7.175L7 9.85V10q0 .9.375 1.825.375.925 1.125 1.675l-1.2 1.2q-.975-.975-1.488-2.2Q5.3 11.275 5.3 10q0-.425.05-.825.05-.4.175-.825L4.25 7.075q-.275.725-.412 1.462Q3.7 9.275 3.7 10q0 1.575.6 3.137.6 1.563 1.8 2.763l-1.2 1.2q-1.425-1.5-2.163-3.325Q2 11.95 2 10q0-1.1.237-2.163.238-1.062.713-2.062L1.4 4.225 2.8 2.8l18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialSignalDisconnected.displayName = 'AmauiIconMaterialSignalDisconnected';

export default IconMaterialSignalDisconnected;
