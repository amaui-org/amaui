import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equalizer'

      short_name='Equalizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-4q0-.825.588-1.413Q5.175 12 6 12t1.412.587Q8 13.175 8 14v4q0 .825-.588 1.413Q6.825 20 6 20Zm6 0q-.825 0-1.412-.587Q10 18.825 10 18V6q0-.825.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6v12q0 .825-.587 1.413Q12.825 20 12 20Zm6 0q-.825 0-1.413-.587Q16 18.825 16 18v-7q0-.825.587-1.413Q17.175 9 18 9q.825 0 1.413.587Q20 10.175 20 11v7q0 .825-.587 1.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialEqualizer.displayName = 'AmauiIconMaterialEqualizer';

export default IconMaterialEqualizer;
