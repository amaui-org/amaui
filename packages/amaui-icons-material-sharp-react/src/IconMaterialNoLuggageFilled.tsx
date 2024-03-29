import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageFilled'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-7.725-7.725v-2.85l6.25 6.25V21h-2q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21H5V6h1.025l.9.9v2.85L.675 3.5 2.1 2.075l19.8 19.8Zm-7.725-7.725-1.5-1.5V18h1.5Zm-3.25-3.25-1.5-1.5V18h1.5ZM10.5 6h3V3.5h-3ZM19 16.125l-3-3V9h-1.5v2.625l-1.75-1.75V9h-.875l-3-3H9V2h6v4h4Zm-4.5-.15V18H16v-2.025Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageFilled.displayName = 'AmauiIconMaterialNoLuggageFilled';

export default IconMaterialNoLuggageFilled;
