import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleHinduW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduW100'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 21.35v-9.7h.7v2h3.125l3.15-10.425V1.65h.7v2h3.325v-2h.7V3.1l3.175 10.55h3.125v-2h.7v9.7h-7.7v-5h-3.3v5Zm5.175-9.7h8.35l-1-3.3h-6.35Zm1.2-4h5.95l-1-3.3h-3.95Zm-5.675 13h6.3v-5h4.7v5h6.3v-6.3h-3.675l-.6-2h-8.75l-.6 2H3.35ZM12 12.5Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduW100.displayName = 'AmauiIconMaterialTempleHinduW100';

export default IconMaterialTempleHinduW100;
