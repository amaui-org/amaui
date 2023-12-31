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
      <path d="m292-609-81 45q-11 6-21 3.5T174-574l-40-70q-6-11-3.5-21.5T144-682l178-106h42q12 0 19 7t7 19v4q0 36 27 63t63 27q36 0 63-27t27-63v-4q0-12 7-19t19-7h42l178 106q11 6 13.5 16.5T826-644l-40 70q-6 11-16 13.5t-21-3.5l-81-45v409q0 12-8 20t-20 8H320q-12 0-20-8t-8-20v-409Zm28-47v456h320v-456l122 67 40-69-171-102h-33q0 50-34 85t-84 35q-50 0-84-35t-34-85h-33L158-658l40 69 122-67Zm160 176Z"/>
    </Icon>
  );
});

IconMaterialApparelW100.displayName = 'AmauiIconMaterialApparelW100';

export default IconMaterialApparelW100;
