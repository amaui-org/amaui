import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagTwoTone'
      short_name='Flag'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity=".3"/><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z"/>
    </Icon>
  );
});

IconMaterialFlagTwoTone.displayName = 'AmauiIconMaterialFlagTwoTone';

export default IconMaterialFlagTwoTone;
