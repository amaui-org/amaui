import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddW100'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-650h172-172Zm-388 0h369-38 12-343Zm15-28h529l-69-82H284l-69 82Zm185 239 80-40 80 40v-211H400v211Zm155 267H172v-498l98-118h419l99 120v159q-5-1-11-1h-17v-140H588v222q-4 4-10.5 12t-8.5 13l-89-44-108 54v-257H200v450h343q2.25 7.667 5.625 14.333Q552-179 555-172Zm196 31v-120H631v-28h120v-120h28v120h120v28H779v120h-28Z"/>
    </Icon>
  );
});

IconMaterialBoxAddW100.displayName = 'AmauiIconMaterialBoxAddW100';

export default IconMaterialBoxAddW100;
