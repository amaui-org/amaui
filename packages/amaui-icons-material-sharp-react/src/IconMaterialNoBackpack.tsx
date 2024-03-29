import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpack'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 17.175-2-2V8q0-.825-.587-1.412Q16.825 6 16 6H8.825l-1.85-1.85H7V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4Q20 6.6 20 8Zm-3.5-3.5L14.825 12H16.5Zm3.275 8.925L1.4 4.225 2.8 2.8l18.375 18.4Zm-8.6-10.6v2H7.5v-2Zm2.375-1.275Zm-2 3.65Zm-6.375-9.2 1.4 1.4q-.275.275-.425.637Q6 7.575 6 8v12h12v-1.975l2 2V22H4V8q0-.825.312-1.55.313-.725.863-1.275Z"/>
    </Icon>
  );
});

IconMaterialNoBackpack.displayName = 'AmauiIconMaterialNoBackpack';

export default IconMaterialNoBackpack;
