import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllergiesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergiesW100Filled'

      short_name='Allergies'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-4.9-7.25 1.8-.9-2-4-1.8.9ZM9.5 18h2v-7.25l-2.1-4.2-1.8.9 1.9 3.8Zm3 0h2v-6.75l1.9-3.8-1.8-.9-2.1 4.2Zm4.4-4.55 2-4-1.8-.9-2 4Z"/>
    </Icon>
  );
});

IconMaterialAllergiesW100Filled.displayName = 'AmauiIconMaterialAllergiesW100Filled';

export default IconMaterialAllergiesW100Filled;
