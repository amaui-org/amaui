import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wc'

      short_name='Wc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 22q-.425 0-.713-.288Q5.5 21.425 5.5 21v-6.5H5q-.425 0-.713-.288Q4 13.925 4 13.5V9q0-.825.588-1.413Q5.175 7 6 7h3q.825 0 1.413.587Q11 8.175 11 9v4.5q0 .425-.287.712-.288.288-.713.288h-.5V21q0 .425-.287.712Q8.925 22 8.5 22Zm9.5 0q-.425 0-.712-.288Q15 21.425 15 21v-5h-1.625q-.5 0-.8-.413-.3-.412-.125-.912l2.1-6.325q.2-.65.738-1Q15.825 7 16.5 7q.675 0 1.212.35.538.35.738 1l2.1 6.325q.175.5-.125.912-.3.413-.8.413H18v5q0 .425-.288.712Q17.425 22 17 22ZM7.5 6q-.825 0-1.412-.588Q5.5 4.825 5.5 4t.588-1.413Q6.675 2 7.5 2t1.413.587Q9.5 3.175 9.5 4q0 .825-.587 1.412Q8.325 6 7.5 6Zm9 0q-.825 0-1.412-.588Q14.5 4.825 14.5 4t.588-1.413Q15.675 2 16.5 2t1.413.587Q18.5 3.175 18.5 4q0 .825-.587 1.412Q17.325 6 16.5 6Z"/>
    </Icon>
  );
});

IconMaterialWc.displayName = 'AmauiIconMaterialWc';

export default IconMaterialWc;
