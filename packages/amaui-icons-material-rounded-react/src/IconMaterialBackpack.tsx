import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Backpack'

      short_name='Backpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V8q0-1.4.85-2.45Q5.7 4.5 7 4.15V3.5q0-.625.438-1.062Q7.875 2 8.5 2t1.062.438Q10 2.875 10 3.5V4h4v-.5q0-.625.438-1.062Q14.875 2 15.5 2t1.062.438Q17 2.875 17 3.5v.65q1.3.35 2.15 1.4Q20 6.6 20 8v12q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V8q0-.825-.587-1.412Q16.825 6 16 6H8q-.825 0-1.412.588Q6 7.175 6 8v12Zm9.5-4q.425 0 .712-.288.288-.287.288-.712v-2q0-.425-.288-.713Q15.925 12 15.5 12h-7q-.425 0-.712.287-.288.288-.288.713t.288.712Q8.075 14 8.5 14h6v1q0 .425.288.712.287.288.712.288ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialBackpack.displayName = 'AmauiIconMaterialBackpack';

export default IconMaterialBackpack;
