import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hail'

      short_name='Hail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm-2 16q-.425 0-.712-.288Q9 21.425 9 21V10.1q-1.025.35-1.438 1.187-.412.838-.512 1.813-.05.375-.325.638-.275.262-.65.262-.45 0-.763-.325-.312-.325-.262-.75Q5.375 10.2 7.213 8.6 9.05 7 12 7q2.225 0 3.463-.988Q16.7 5.025 16.95 3q.05-.425.338-.713Q17.575 2 18 2t.712.3q.288.3.238.7-.2 1.875-1.138 3.312Q16.875 7.75 15 8.4V21q0 .425-.287.712Q14.425 22 14 22t-.712-.288Q13 21.425 13 21v-5h-2v5q0 .425-.287.712Q10.425 22 10 22Zm-5 0q-.425 0-.713-.288Q4 21.425 4 21v-4q0-.425.287-.712Q4.575 16 5 16h1q.425 0 .713.288Q7 16.575 7 17v4q0 .425-.287.712Q6.425 22 6 22Z"/>
    </Icon>
  );
});

IconMaterialHail.displayName = 'AmauiIconMaterialHail';

export default IconMaterialHail;
