import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppRegistrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppRegistrationFilled'

      short_name='AppRegistration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20v-2.125l5.3-5.3 2.125 2.125-5.3 5.3Zm8.125-6L17 11.875l1.425-1.425 2.125 2.125ZM6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6t-.588 1.412Q6.825 8 6 8Zm0 12q-.825 0-1.412-.587Q4 18.825 4 18q0-.825.588-1.413Q5.175 16 6 16t1.412.587Q8 17.175 8 18q0 .825-.588 1.413Q6.825 20 6 20Zm0-6q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12Zm6-6q-.825 0-1.413-.588Q16 6.825 16 6t.587-1.412Q17.175 4 18 4q.825 0 1.413.588Q20 5.175 20 6t-.587 1.412Q18.825 8 18 8Zm-6 0q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z"/>
    </Icon>
  );
});

IconMaterialAppRegistrationFilled.displayName = 'AmauiIconMaterialAppRegistrationFilled';

export default IconMaterialAppRegistrationFilled;
