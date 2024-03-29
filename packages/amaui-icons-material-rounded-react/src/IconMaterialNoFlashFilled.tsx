import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFlashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashFilled'

      short_name='NoFlash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.575-1.8-1.775q-.1.5-.513.85-.412.35-.962.35h-13q-.625 0-1.062-.438Q2 21.125 2 20.5v-9.6q0-.625.438-1.063Q2.875 9.4 3.5 9.4h2.65l.2-.225L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM9.25 12.075q-1.425.3-2.338 1.375Q6 14.525 6 16q0 1.65 1.175 2.825Q8.35 20 10 20q1.475 0 2.575-.925t1.375-2.325l-.012.025.012-.025ZM10 18q-.825 0-1.412-.587Q8 16.825 8 16q0-.825.588-1.413Q9.175 14 10 14t1.413.587Q12 15.175 12 16q0 .825-.587 1.413Q10.825 18 10 18Zm8-2.875L10.875 8h.7q.475 0 .913.2.437.2.762.55l.6.65h2.65q.625 0 1.062.437.438.438.438 1.063ZM19 7h-.5q-.2 0-.35-.15Q18 6.7 18 6.5v-4q0-.2.15-.35.15-.15.35-.15h2.725q.275 0 .438.225.162.225.037.475l-1.3 2.9h.75q.275 0 .412.237.138.238.013.513l-1.85 3.85q-.125.275-.425.187Q19 10.3 19 10Z"/>
    </Icon>
  );
});

IconMaterialNoFlashFilled.displayName = 'AmauiIconMaterialNoFlashFilled';

export default IconMaterialNoFlashFilled;
