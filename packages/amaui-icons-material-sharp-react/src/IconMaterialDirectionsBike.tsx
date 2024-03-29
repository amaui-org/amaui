import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBike = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBike'

      short_name='DirectionsBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 5.5q-.825 0-1.412-.588Q13.5 4.325 13.5 3.5t.588-1.413Q14.675 1.5 15.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588Zm-4.7 5 2.2 2.3V19h-2v-5L6.3 9.9l4.3-4.3q.325-.325.688-.463Q11.65 5 12.1 5q.45 0 .813.137.362.138.687.463l1.9 1.9q.675.675 1.575 1.087.9.413 2.025.413v2q-1.575 0-2.85-.562Q14.975 9.875 14 8.9l-.8-.8ZM5 22q-2.125 0-3.562-1.438Q0 19.125 0 17t1.438-3.562Q2.875 12 5 12t3.562 1.438Q10 14.875 10 17t-1.438 3.562Q7.125 22 5 22Zm0-1.5q1.425 0 2.463-1.038Q8.5 18.425 8.5 17q0-1.425-1.037-2.463Q6.425 13.5 5 13.5t-2.462 1.037Q1.5 15.575 1.5 17t1.038 2.462Q3.575 20.5 5 20.5ZM19 22q-2.125 0-3.562-1.438Q14 19.125 14 17t1.438-3.562Q16.875 12 19 12t3.562 1.438Q24 14.875 24 17t-1.438 3.562Q21.125 22 19 22Zm0-1.5q1.425 0 2.462-1.038Q22.5 18.425 22.5 17q0-1.425-1.038-2.463Q20.425 13.5 19 13.5q-1.425 0-2.462 1.037Q15.5 15.575 15.5 17t1.038 2.462Q17.575 20.5 19 20.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBike.displayName = 'AmauiIconMaterialDirectionsBike';

export default IconMaterialDirectionsBike;
