import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat2'

      short_name='Stat2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-407 324-252q-11 11-27.5 11.5T268-252q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-252q-11 11-28 11t-28-11L480-407Zm0-240L324-492q-11 11-27.5 11.5T268-492q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-492q-11 11-28 11t-28-11L480-647Z"/>
    </Icon>
  );
});

IconMaterialStat2.displayName = 'AmauiIconMaterialStat2';

export default IconMaterialStat2;
