import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoFilled'

      short_name='FeaturedVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h7q.425 0 .713-.288Q14 13.425 14 13V8q0-.425-.287-.713Q13.425 7 13 7H6q-.425 0-.713.287Q5 7.575 5 8v5q0 .425.287.712Q5.575 14 6 14Zm-2 6q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoFilled.displayName = 'AmauiIconMaterialFeaturedVideoFilled';

export default IconMaterialFeaturedVideoFilled;
