import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoupe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Loupe'

      short_name='Loupe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3q0 .425.288.712.287.288.712.288Zm0 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12v8q0 .825-.587 1.413Q20.825 22 20 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialLoupe.displayName = 'AmauiIconMaterialLoupe';

export default IconMaterialLoupe;
