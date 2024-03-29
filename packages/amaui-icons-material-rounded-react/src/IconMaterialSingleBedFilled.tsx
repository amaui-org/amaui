import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSingleBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedFilled'

      short_name='SingleBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17v-5.025q0-.825.588-1.4Q5.175 10 6 10V7q0-.825.588-1.412Q7.175 5 8 5h8q.825 0 1.413.588Q18 6.175 18 7v3q.825 0 1.413.587Q20 11.175 20 12v5h-1.35l-.475 1.5q-.075.225-.262.363-.188.137-.413.137-.25 0-.425-.163-.175-.162-.25-.387L16.35 17h-8.7l-.475 1.5q-.075.225-.262.363Q6.725 19 6.5 19q-.25 0-.425-.163-.175-.162-.25-.387L5.35 17Zm9-7h3V7h-3Zm-5 0h3V7H8Z"/>
    </Icon>
  );
});

IconMaterialSingleBedFilled.displayName = 'AmauiIconMaterialSingleBedFilled';

export default IconMaterialSingleBedFilled;
