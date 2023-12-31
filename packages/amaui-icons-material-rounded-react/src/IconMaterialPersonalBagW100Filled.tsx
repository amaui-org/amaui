import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagW100Filled'

      short_name='PersonalBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-132q-26 0-43-17t-17-43v-288q0-75 43-132.5T404-694v-14q0-32 22-54t54-22q32 0 54 22t22 54v14q66 24 109 81.5T708-480v288q0 26-17 43t-43 17H312Zm288-214q6 0 10-4t4-10v-34q0-25-17.5-42.5T554-454H360q-6 0-10 4t-4 10q0 6 4 10t10 4h194q14 0 23 9t9 23v34q0 6 4 10t10 4ZM432-702q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20-14-34t-34-14q-20 0-34 14t-14 34v6Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagW100Filled.displayName = 'AmauiIconMaterialPersonalBagW100Filled';

export default IconMaterialPersonalBagW100Filled;
