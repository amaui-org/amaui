import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewFilled'

      short_name='OpenInNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5H5v14h14v-6q0-.425.288-.713Q19.575 12 20 12t.712.287Q21 12.575 21 13v6q0 .825-.587 1.413Q19.825 21 19 21Zm4-6q-.275-.275-.275-.7 0-.425.275-.7L17.6 5H15q-.425 0-.712-.288Q14 4.425 14 4t.288-.713Q14.575 3 15 3h5q.425 0 .712.287Q21 3.575 21 4v5q0 .425-.288.712Q20.425 10 20 10t-.712-.288Q19 9.425 19 9V6.4l-8.625 8.625q-.275.275-.675.275T9 15Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewFilled.displayName = 'AmauiIconMaterialOpenInNewFilled';

export default IconMaterialOpenInNewFilled;
