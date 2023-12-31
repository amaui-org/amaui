import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddW100Filled'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-498l98-118h419l99 120v159q-5-1-11-1h-11q-52 0-98 21.5T588-428v-222H372v257l108-54 89 44q-18 28-28 60.5T531-275q0 27 6 53t18 50H172Zm579 31v-120H631v-28h120v-120h28v120h120v28H779v120h-28ZM215-678h529l-69-82H284l-69 82Z"/>
    </Icon>
  );
});

IconMaterialBoxAddW100Filled.displayName = 'AmauiIconMaterialBoxAddW100Filled';

export default IconMaterialBoxAddW100Filled;
