import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHrRestingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrRestingFilled'

      short_name='HrResting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 936q-17 0-28.5-11.5T120 896q0-17 11.5-28.5T160 856h640q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936H160Zm57-384q-29-27-42.5-64T161 412q0-81 55.5-138.5T352 216q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800 413q0 39-14.5 74.5T744 551L535 754q-11 11-25 16.5t-30 5.5q-16 0-30-5.5T425 754L217 552Z"/>
    </Icon>
  );
});

IconMaterialHrRestingFilled.displayName = 'AmauiIconMaterialHrRestingFilled';

export default IconMaterialHrRestingFilled;
