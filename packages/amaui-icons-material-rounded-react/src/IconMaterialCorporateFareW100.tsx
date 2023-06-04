import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCorporateFareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareW100'

      short_name='CorporateFare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.9q-.275 0-.487-.212-.213-.213-.213-.488V3.9q0-.275.213-.488.212-.212.487-.212h7.3q.275 0 .488.212.212.213.212.488v3.3h8.7q.275 0 .487.212.213.213.213.488v11.3q0 .275-.213.488-.212.212-.487.212Zm0-.7h7.3v-3.3h-7.3Zm0-4h7.3v-3.3h-7.3Zm0-4h7.3V7.9h-7.3Zm0-4h7.3V3.9h-7.3Zm8 12h8.7V7.9h-8.7Zm2.5-7.3v-.7h3.2v.7Zm0 4v-.7h3.2v.7Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareW100.displayName = 'AmauiIconMaterialCorporateFareW100';

export default IconMaterialCorporateFareW100;
