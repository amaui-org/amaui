import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Merge'

      short_name='Merge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 20.3q-.275-.275-.275-.7 0-.425.275-.7l4.125-4.15q.575-.575.875-1.3.3-.725.3-1.525v-5.1l-.9.9Q9.825 8 9.413 8 9 8 8.7 7.7q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.288.687.012.413-.288.713-.275.275-.7.275-.425 0-.7-.275l-.9-.875v5.1q0 .8.3 1.525.3.725.875 1.3L18.3 18.9q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275L12 15.4l-4.9 4.9q-.275.275-.688.287Q6 20.6 5.7 20.3Z"/>
    </Icon>
  );
});

IconMaterialMerge.displayName = 'AmauiIconMaterialMerge';

export default IconMaterialMerge;
