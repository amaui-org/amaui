import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDelete'

      short_name='AutoDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 8q-.425 0-.712.287Q9 8.575 9 9v7q0 .425.288.712Q9.575 17 10 17q0-1.575.5-2.588L11 13.4V9q0-.425-.287-.713Q10.425 8 10 8Zm3 3.25q.425-.275.963-.55.537-.275 1.037-.4V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm.5-5.2v-2.3q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35v2.275q0 .2.075.388.075.187.225.337l1.5 1.5q.15.15.35.15.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35ZM11.25 21H7q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v4.3q-.425-.125-.988-.213Q17.45 10 17 10V6H7v13h3.3q.15.525.4 1.038.25.512.55.962ZM7 6v13Z"/>
    </Icon>
  );
});

IconMaterialAutoDelete.displayName = 'AmauiIconMaterialAutoDelete';

export default IconMaterialAutoDelete;
