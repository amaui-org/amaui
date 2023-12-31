import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDestructionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DestructionW100Filled'

      short_name='Destruction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-23 0-38.5-15.5T172-226v-131q0-23 15.5-38.5T226-411h508q23 0 38.5 15.5T788-357v131q0 23-15.5 38.5T734-172H226Zm42-299-75-44q-7-4-9.5-10t-.5-13q2-7 6-11.5t12-6.5l132-23-36-131q-2-8 .5-14t7.5-10q5-4 12-4.5t14 4.5l111 79 67-118q4-7 10.5-10t13.5-1q7 2 11.5 6t6.5 12l23 134 131-37q8-2 14 1t10 8q4 5 4.5 12t-4.5 14l-78 111 92 52H268Z"/>
    </Icon>
  );
});

IconMaterialDestructionW100Filled.displayName = 'AmauiIconMaterialDestructionW100Filled';

export default IconMaterialDestructionW100Filled;
