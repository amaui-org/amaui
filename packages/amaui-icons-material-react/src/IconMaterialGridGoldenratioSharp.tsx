import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridGoldenratioSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratioSharp'
      short_name='GridGoldenratio'

      {...props}
    >
      <path d="M9 22V15H2V13H9V11H2V9H9V2H11V9H13V2H15V9H22V11H15V13H22V15H15V22H13V15H11V22ZM11 13H13V11H11Z"/>
    </Icon>
  )
});

export default IconMaterialGridGoldenratioSharp;
