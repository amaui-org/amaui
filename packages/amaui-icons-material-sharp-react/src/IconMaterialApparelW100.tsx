import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApparelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApparelW100'

      short_name='Apparel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-609-105 58-67-117 202-120h68v30q0 36 27 63t63 27q36 0 63-27t27-63v-30h68l202 120-67 117-105-58v437H292v-437Zm28-47v456h320v-456l122 67 40-69-171-102h-33q0 50-34 85t-84 35q-50 0-84-35t-34-85h-33L158-658l40 69 122-67Zm160 176Z"/>
    </Icon>
  );
});

IconMaterialApparelW100.displayName = 'AmauiIconMaterialApparelW100';

export default IconMaterialApparelW100;
