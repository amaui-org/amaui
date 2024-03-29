import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoofingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingFilled'

      short_name='Roofing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 12q-.35 0-.475-.325t.15-.55l8.35-7.525q.275-.275.675-.275t.675.275L16 6.6V5q0-.425.288-.713Q16.575 4 17 4h1q.425 0 .712.287Q19 4.575 19 5v4.3l2.025 1.825q.275.225.15.55Q21.05 12 20.7 12h-1.325q-.2 0-.362-.062-.163-.063-.288-.188L12 5.7l-6.725 6.05q-.125.125-.287.188-.163.062-.363.062Zm6.7 8q-.425 0-.712-.288Q9 19.425 9 19v-4q0-.425.288-.713Q9.575 14 10 14h4q.425 0 .713.287.287.288.287.713v4q0 .425-.287.712Q14.425 20 14 20Zm1-2h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialRoofingFilled.displayName = 'AmauiIconMaterialRoofingFilled';

export default IconMaterialRoofingFilled;
