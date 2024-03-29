import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMosque = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mosque'

      short_name='Mosque'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V8.725Q.55 8.45.275 8.012 0 7.575 0 7t.6-1.4Q1.2 4.775 2 4q.8.775 1.4 1.6.6.825.6 1.4t-.275 1.012Q3.45 8.45 3 8.725V13h2V9.05h1.55q-.275-.425-.412-.925Q6 7.625 6 7.1q0-1 .475-1.85.475-.85 1.275-1.4L12 1l4.25 2.85q.8.55 1.275 1.4Q18 6.1 18 7.1q0 .525-.137 1.025-.138.5-.413.925H19V13h2V8.725q-.45-.275-.725-.713Q20 7.575 20 7t.6-1.4q.6-.825 1.4-1.6.8.775 1.4 1.6.6.825.6 1.4t-.275 1.012q-.275.438-.725.713V21H13v-5h-2v5ZM9.9 9h4.2q.8 0 1.35-.55T16 7.1q0-.5-.225-.913-.225-.412-.625-.687L12 3.4 8.85 5.5q-.4.275-.625.687Q8 6.6 8 7.1q0 .8.55 1.35T9.9 9ZM3 19h6v-5h6v5h6v-4h-4v-4H7v4H3Zm9-8Zm0-2Zm0 .05Z"/>
    </Icon>
  );
});

IconMaterialMosque.displayName = 'AmauiIconMaterialMosque';

export default IconMaterialMosque;
