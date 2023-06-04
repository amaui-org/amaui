import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForward5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5W100'

      short_name='Forward5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 15.6v-.7h3v-1.55h-3V10.4h3.7v.7h-3v1.55h3v2.95Zm2.1 5.1q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6h.45l-1.7-1.7.5-.5 2.55 2.525-2.5 2.525-.5-.5L12.45 6H12Q9.075 6 7.038 8.037 5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13h.7q0 1.6-.6 3t-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialForward5W100.displayName = 'AmauiIconMaterialForward5W100';

export default IconMaterialForward5W100;
