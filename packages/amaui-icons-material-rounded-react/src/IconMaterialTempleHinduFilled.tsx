import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleHinduFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduFilled'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.8 7 1.175-3.875V2q0-.425.287-.713Q9.55 1 9.975 1t.713.287q.287.288.287.713v1H13V2q0-.425.288-.713Q13.575 1 14 1t.713.287Q15 1.575 15 2v1l1.2 4ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20v-8q0-.425.288-.713Q2.575 11 3 11t.713.287Q4 11.575 4 12v1h16v-1q0-.425.288-.713Q20.575 11 21 11t.712.287Q22 11.575 22 12v8q0 .825-.587 1.413Q20.825 22 20 22h-7v-5h-2v5Zm2.6-11 .6-2h9.6l.6 2Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduFilled.displayName = 'AmauiIconMaterialTempleHinduFilled';

export default IconMaterialTempleHinduFilled;
