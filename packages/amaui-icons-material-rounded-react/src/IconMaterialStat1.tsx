import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat1'

      short_name='Stat1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-528 324-373q-11 11-27.5 11.5T268-373q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-373q-11 11-28 11t-28-11L480-528Z"/>
    </Icon>
  );
});

IconMaterialStat1.displayName = 'AmauiIconMaterialStat1';

export default IconMaterialStat1;
