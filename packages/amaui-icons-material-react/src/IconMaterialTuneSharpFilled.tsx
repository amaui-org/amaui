import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTuneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneSharpFilled'
      short_name='Tune'

      {...props}
    >
      <path d="M3 19V17H9V19ZM3 7V5H13V7ZM11 21V15H13V17H21V19H13V21ZM7 15V13H3V11H7V9H9V15ZM11 13V11H21V13ZM15 9V3H17V5H21V7H17V9Z"/>
    </Icon>
  )
});

export default IconMaterialTuneSharpFilled;
