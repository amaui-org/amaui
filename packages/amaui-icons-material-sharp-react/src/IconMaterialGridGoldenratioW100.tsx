import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridGoldenratioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratioW100'

      short_name='GridGoldenratio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 20.7v-7h-7V13h7v-2h-7v-.7h7v-7h.7v7h2v-7h.7v7h7v.7h-7v2h7v.7h-7v7H13v-7h-2v7ZM11 13h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratioW100.displayName = 'AmauiIconMaterialGridGoldenratioW100';

export default IconMaterialGridGoldenratioW100;
