import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRubricW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RubricW100Filled'

      short_name='Rubric'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-200v-560q0-13 8.5-21.5T242-790h476q13 0 21.5 8.5T748-760v264q0 13-8.5 21.5T718-466H240v120h212q6 0 10 4t4 10q0 6-4 10t-10 4H240v120h212q6 0 10 4t4 10q0 6-4 10t-10 4H242q-13 0-21.5-8.5T212-200Zm404-10 132-132q4-4 9.5-4.5T768-342q5 5 5 10t-5 10L637-191q-9 9-21 9t-21-9l-45-45q-4-4-4.5-9.5T550-256q5-5 10-5t10 5l46 46ZM240-494h226v-120H240v120Zm254 0h226v-120H494v120ZM240-642h226v-120H240v120Zm254 0h226v-120H494v120Z"/>
    </Icon>
  );
});

IconMaterialRubricW100Filled.displayName = 'AmauiIconMaterialRubricW100Filled';

export default IconMaterialRubricW100Filled;
