import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lda'

      short_name='Lda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-3.425L5 16.05V11h6V8H8V2h8v6h-3v3h6v5.05l-6 2.525V22ZM10 6h4V4h-4Zm1 10.4V13H7v1.725Zm2 0 4-1.675V13h-4ZM10 6V4v2Z"/>
    </Icon>
  );
});

IconMaterialLda.displayName = 'AmauiIconMaterialLda';

export default IconMaterialLda;
