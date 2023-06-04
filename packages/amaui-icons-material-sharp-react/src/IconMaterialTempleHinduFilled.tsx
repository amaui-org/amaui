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
      <path d="m7.8 7 1.175-3.875V1h2v2H13V1h2v2l1.2 4ZM2 22V11h2v2h16v-2h2v11h-9v-5h-2v5Zm4.6-11 .6-2h9.6l.6 2Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduFilled.displayName = 'AmauiIconMaterialTempleHinduFilled';

export default IconMaterialTempleHinduFilled;
