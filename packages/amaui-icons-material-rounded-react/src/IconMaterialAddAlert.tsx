import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlert'

      short_name='AddAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.425 0 .713-.288Q13 14.425 13 14v-1h1q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11h-1v-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10v1h-1q-.425 0-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13h1v1q0 .425.288.712.287.288.712.288Zm-7 4q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z"/>
    </Icon>
  );
});

IconMaterialAddAlert.displayName = 'AmauiIconMaterialAddAlert';

export default IconMaterialAddAlert;
