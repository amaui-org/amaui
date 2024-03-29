import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheatersFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersFilled'

      short_name='Theaters'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20V4q0-.425.287-.713Q4.575 3 5 3t.713.287Q6 3.575 6 4v1h2V4q0-.425.288-.713Q8.575 3 9 3h6q.425 0 .713.287Q16 3.575 16 4v1h2V4q0-.425.288-.713Q18.575 3 19 3t.712.287Q20 3.575 20 4v16q0 .425-.288.712Q19.425 21 19 21t-.712-.288Q18 20.425 18 20v-1h-2v1q0 .425-.287.712Q15.425 21 15 21H9q-.425 0-.712-.288Q8 20.425 8 20v-1H6v1q0 .425-.287.712Q5.425 21 5 21Zm1-4h2v-2H6Zm0-4h2v-2H6Zm0-4h2V7H6Zm10 8h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V7h-2Z"/>
    </Icon>
  );
});

IconMaterialTheatersFilled.displayName = 'AmauiIconMaterialTheatersFilled';

export default IconMaterialTheatersFilled;
