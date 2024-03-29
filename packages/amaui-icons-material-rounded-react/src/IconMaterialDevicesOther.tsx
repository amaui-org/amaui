import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOther = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOther'

      short_name='DevicesOther'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 6H4v12h2q.425 0 .713.288Q7 18.575 7 19t-.287.712Q6.425 20 6 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h15q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6Zm-9 14q-.425 0-.712-.288Q9 19.425 9 19v-.8q-.45-.425-.725-.975Q8 16.675 8 16t.275-1.225q.275-.55.725-.975V13q0-.425.288-.713Q9.575 12 10 12h2q.425 0 .713.287.287.288.287.713v.8q.45.425.725.975Q14 15.325 14 16t-.275 1.225q-.275.55-.725.975v.8q0 .425-.287.712Q12.425 20 12 20Zm1-2.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q11.65 14.5 11 14.5q-.65 0-1.075.425Q9.5 15.35 9.5 16q0 .65.425 1.075.425.425 1.075.425Zm5 2.5q-.425 0-.712-.288Q15 19.425 15 19v-9q0-.425.288-.713Q15.575 9 16 9h5q.425 0 .712.287Q22 9.575 22 10v9q0 .425-.288.712Q21.425 20 21 20Zm1-2h3v-7h-3Z"/>
    </Icon>
  );
});

IconMaterialDevicesOther.displayName = 'AmauiIconMaterialDevicesOther';

export default IconMaterialDevicesOther;
