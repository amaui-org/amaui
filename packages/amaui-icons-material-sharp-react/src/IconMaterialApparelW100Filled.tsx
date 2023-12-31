import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApparelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApparelW100Filled'

      short_name='Apparel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-609-105 58-67-117 202-120h68v30q0 36 27 63t63 27q36 0 63-27t27-63v-30h68l202 120-67 117-105-58v437H292v-437Z"/>
    </Icon>
  );
});

IconMaterialApparelW100Filled.displayName = 'AmauiIconMaterialApparelW100Filled';

export default IconMaterialApparelW100Filled;
