import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuOpenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenTwoTone'
      short_name='MenuOpen'

      {...props}
    >
      <path d="M0,0h24v24H0V0z" fill="none"/><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"/>
    </Icon>
  )
});

export default IconMaterialMenuOpenTwoTone;
