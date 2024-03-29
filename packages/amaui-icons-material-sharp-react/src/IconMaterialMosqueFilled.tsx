import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMosqueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueFilled'

      short_name='Mosque'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.125 8.05q-.175 0-.15-.325Q6 7.4 6 7.1q0-1 .475-1.85.475-.85 1.275-1.4L12 1l4.25 2.85q.8.55 1.275 1.4Q18 6.1 18 7.1q0 .3.025.625t-.15.325ZM1 21V8.725Q.55 8.45.275 8.012 0 7.575 0 7t.6-1.4Q1.2 4.775 2 4q.8.775 1.4 1.6.6.825.6 1.4t-.275 1.012Q3.45 8.45 3 8.725V13h2V9.05h14V13h2V8.725q-.45-.275-.725-.713Q20 7.575 20 7t.6-1.4q.6-.825 1.4-1.6.8.775 1.4 1.6.6.825.6 1.4t-.275 1.012q-.275.438-.725.713V21h-9v-6h-4v6Z"/>
    </Icon>
  );
});

IconMaterialMosqueFilled.displayName = 'AmauiIconMaterialMosqueFilled';

export default IconMaterialMosqueFilled;
