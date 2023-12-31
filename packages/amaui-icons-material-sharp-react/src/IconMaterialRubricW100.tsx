import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRubricW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RubricW100'

      short_name='Rubric'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-170v-620h536v324H240v120h226v28H240v120h226v28H212Zm404 0-76-76 20-20 56 56 142-142 20 20-162 162ZM240-494h226v-120H240v120Zm254 0h226v-120H494v120ZM240-642h226v-120H240v120Zm254 0h226v-120H494v120Z"/>
    </Icon>
  );
});

IconMaterialRubricW100.displayName = 'AmauiIconMaterialRubricW100';

export default IconMaterialRubricW100;
