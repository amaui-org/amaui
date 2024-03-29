import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleHindu = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHindu'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V11h2v2h2l2.975-9.875V1h2v2H13V1h2v2l3 10h2v-2h2v11h-9v-5h-2v5Zm6.7-11h6.6l-.6-2H9.3Zm1.2-4h4.2l-.6-2h-3ZM4 20h5v-5h6v5h5v-5h-3.5l-.6-2H8.1l-.6 2H4Zm8-7.5Z"/>
    </Icon>
  );
});

IconMaterialTempleHindu.displayName = 'AmauiIconMaterialTempleHindu';

export default IconMaterialTempleHindu;
