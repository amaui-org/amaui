import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRainyHeavyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyHeavyW100'

      short_name='RainyHeavy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M314-221 61-726l25-13 253 505-25 13Zm186 0L248-726l25-13 253 505-26 13Zm374 0L621-726l25-13 253 505-25 13Zm-187 0L435-726l25-13 252 504-25 14Z"/>
    </Icon>
  );
});

IconMaterialRainyHeavyW100.displayName = 'AmauiIconMaterialRainyHeavyW100';

export default IconMaterialRainyHeavyW100;
