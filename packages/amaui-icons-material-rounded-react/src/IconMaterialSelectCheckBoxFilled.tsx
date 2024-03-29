import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectCheckBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxFilled'

      short_name='SelectCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.525 17-5.65-5.65 1.4-1.4 4.25 4.25L20.7 5.025 22.125 6.4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.2 0 .375.037.175.038.35.113L17.875 5H5v14h14v-6.65l2-2V19q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxFilled.displayName = 'AmauiIconMaterialSelectCheckBoxFilled';

export default IconMaterialSelectCheckBoxFilled;
