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
      <path d="M6.95 8.05q-.525 0-.737-.213Q6 7.625 6 7.1q0-1 .475-1.85.475-.85 1.275-1.4L12 1l4.25 2.85q.8.55 1.275 1.4Q18 6.1 18 7.1q0 .525-.212.737-.213.213-.738.213ZM1 21V8.725Q.55 8.45.275 8.012 0 7.575 0 7t.6-1.4Q1.2 4.775 2 4q.8.775 1.4 1.6.6.825.6 1.4t-.275 1.012Q3.45 8.45 3 8.725V13h2v-2q0-.625.4-1.2t1.15-.75h10.9q.75.175 1.15.75.4.575.4 1.2v2h2V8.725q-.45-.275-.725-.713Q20 7.575 20 7t.6-1.4q.6-.825 1.4-1.6.8.775 1.4 1.6.6.825.6 1.4t-.275 1.012q-.275.438-.725.713V21h-9v-4q0-.825-.587-1.412Q12.825 15 12 15q-.825 0-1.412.588Q10 16.175 10 17v4Z"/>
    </Icon>
  );
});

IconMaterialMosqueFilled.displayName = 'AmauiIconMaterialMosqueFilled';

export default IconMaterialMosqueFilled;
