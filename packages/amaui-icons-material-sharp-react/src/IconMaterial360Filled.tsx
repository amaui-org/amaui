import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial360Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360Filled'

      short_name='360'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 20-1.4-1.4 1.75-1.8q-3.2-.425-5.275-1.75T2 12q0-2.075 2.888-3.538Q7.775 7 12 7t7.113 1.462Q22 9.925 22 12q0 1.55-1.663 2.775Q18.675 16 16 16.6v-2.05q1.925-.5 2.962-1.238Q20 12.575 20 12q0-.8-2.137-1.9Q15.725 9 12 9q-3.725 0-5.862 1.1Q4 11.2 4 12q0 .6 1.275 1.438Q6.55 14.275 8.9 14.7l-1.3-1.3L9 12l4 4Z"/>
    </Icon>
  );
});

IconMaterial360Filled.displayName = 'AmauiIconMaterial360Filled';

export default IconMaterial360Filled;
