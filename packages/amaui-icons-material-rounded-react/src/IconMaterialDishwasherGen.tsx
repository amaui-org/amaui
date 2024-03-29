import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDishwasherGen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DishwasherGen'

      short_name='DishwasherGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 7q.425 0 .713-.287Q9 6.425 9 6t-.287-.713Q8.425 5 8 5t-.713.287Q7 5.575 7 6t.287.713Q7.575 7 8 7Zm3 0q.425 0 .713-.287Q12 6.425 12 6t-.287-.713Q11.425 5 11 5t-.712.287Q10 5.575 10 6t.288.713Q10.575 7 11 7Zm1 11q1.575 0 2.688-1.075Q15.8 15.85 15.8 14.3q0-.725-.25-1.413-.25-.687-.75-1.187L12 8.9l-2.7 2.7q-.55.55-.837 1.237-.288.688-.263 1.463.05 1.55 1.15 2.625Q10.45 18 12 18Zm0-1.9q-.75 0-1.275-.525-.525-.525-.525-1.275 0-.375.138-.713.137-.337.412-.612l1.25-1.25 1.225 1.225q.275.275.425.625.15.35.15.725 0 .75-.525 1.275-.525.525-1.275.525ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V4H6v16Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialDishwasherGen.displayName = 'AmauiIconMaterialDishwasherGen';

export default IconMaterialDishwasherGen;
