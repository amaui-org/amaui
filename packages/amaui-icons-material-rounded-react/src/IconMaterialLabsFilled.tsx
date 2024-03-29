import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsFilled'

      short_name='Labs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.537-1.462Q7 19.075 7 17V8q-.825 0-1.412-.588Q5 6.825 5 6V4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v2q0 .825-.587 1.412Q17.825 8 17 8v9q0 2.075-1.462 3.538Q14.075 22 12 22Zm0-2q.975 0 1.75-.562.775-.563 1.075-1.438H13q-.425 0-.712-.288Q12 17.425 12 17t.288-.712Q12.575 16 13 16h2v-1h-2q-.425 0-.712-.288Q12 14.425 12 14t.288-.713Q12.575 13 13 13h2v-1h-2q-.425 0-.712-.288Q12 11.425 12 11t.288-.713Q12.575 10 13 10h2V8H9v9q0 1.25.875 2.125T12 20Z"/>
    </Icon>
  );
});

IconMaterialLabsFilled.displayName = 'AmauiIconMaterialLabsFilled';

export default IconMaterialLabsFilled;
