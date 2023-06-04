import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDuoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoW100Filled'

      short_name='Duo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3h7.2q.65 0 1.075.425.425.425.425 1.075V12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-4-6.55h5.7v-2l3 2v-4.7l-3 2v-2H8Z"/>
    </Icon>
  );
});

IconMaterialDuoW100Filled.displayName = 'AmauiIconMaterialDuoW100Filled';

export default IconMaterialDuoW100Filled;
