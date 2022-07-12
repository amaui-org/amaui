import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveSharpFilled'
      short_name='Archive'

      {...props}
    >
      <path d="M3 21V5.8L5.3 3H18.7L21 5.8V21ZM5.4 6H18.6L17.75 5H6.25ZM12 18 16 14 14.6 12.6 13 14.2V10H11V14.2L9.4 12.6L8 14Z"/>
    </Icon>
  )
});

export default IconMaterialArchiveSharpFilled;
