import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreliminaryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreliminaryFilled'

      short_name='Preliminary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17q.425 0 .713-.288Q10 16.425 10 16t-.287-.713Q9.425 15 9 15t-.712.287Q8 15.575 8 16t.288.712Q8.575 17 9 17Zm3 0q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm3 0q.425 0 .713-.288Q16 16.425 16 16t-.287-.713Q15.425 15 15 15t-.712.287Q14 15.575 14 16t.288.712Q14.575 17 15 17Zm-4.075-5.825-1.4-1.425q-.3-.3-.713-.3-.412 0-.712.3t-.3.712q0 .413.3.713l2.125 2.125q.3.3.713.3.412 0 .712-.3l4.225-4.25q.275-.3.288-.712.012-.413-.288-.713t-.7-.3q-.4 0-.7.3ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPreliminaryFilled.displayName = 'AmauiIconMaterialPreliminaryFilled';

export default IconMaterialPreliminaryFilled;
