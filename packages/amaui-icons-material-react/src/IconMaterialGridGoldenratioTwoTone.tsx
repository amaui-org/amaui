import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridGoldenratioTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratioTwoTone'
      short_name='GridGoldenratio'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M22,11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2H22z M13,13h-2v-2h2V13z"/></g></g>
    </Icon>
  );
});

IconMaterialGridGoldenratioTwoTone.displayName = 'AmauiIconMaterialGridGoldenratioTwoTone';

export default IconMaterialGridGoldenratioTwoTone;
