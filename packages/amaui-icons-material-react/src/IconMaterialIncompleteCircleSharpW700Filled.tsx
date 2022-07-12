import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIncompleteCircleSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IncompleteCircleSharpW700Filled'
      short_name='IncompleteCircle'

      {...props}
    >
      <path d="M12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 1.988 7.75Q2.825 5.775 4.3 4.3L12 12V1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialIncompleteCircleSharpW700Filled;
