import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Key'

      short_name='Key'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14q-.825 0-1.412-.588Q5 12.825 5 12t.588-1.413Q6.175 10 7 10t1.412.587Q9 11.175 9 12q0 .825-.588 1.412Q7.825 14 7 14Zm0 4q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6q1.675 0 3.038.825Q11.4 7.65 12.2 9H21l3 3-4.5 4.5-2-1.5-2 1.5-2.125-1.5H12.2q-.8 1.35-2.162 2.175Q8.675 18 7 18Zm0-2q1.4 0 2.463-.85 1.062-.85 1.412-2.15H14l1.45 1.025L17.5 12.5l1.775 1.375L21.15 12l-1-1h-9.275q-.35-1.3-1.412-2.15Q8.4 8 7 8 5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Z"/>
    </Icon>
  );
});

IconMaterialKey.displayName = 'AmauiIconMaterialKey';

export default IconMaterialKey;
