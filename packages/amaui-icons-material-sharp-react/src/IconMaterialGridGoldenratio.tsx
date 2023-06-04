import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridGoldenratio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratio'

      short_name='GridGoldenratio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22v-7H2v-2h7v-2H2V9h7V2h2v7h2V2h2v7h7v2h-7v2h7v2h-7v7h-2v-7h-2v7Zm2-9h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratio.displayName = 'AmauiIconMaterialGridGoldenratio';

export default IconMaterialGridGoldenratio;
