import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreSharpW700Filled'
      short_name='Score'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM12 12.3H13.5V6.3H12ZM15.5 12.3H17.2L15.2 9.3L17.2 6.3H15.5L13.5 9.3ZM7 12.3H11V10.8H8.5V10.05H11V6.3H7V7.8H9.5V8.55H7ZM12.85 19.85 18.7 14V11.275L13 16.95L9 12.95L5.3 16.65V19.7L9 16Z"/>
    </Icon>
  )
});

export default IconMaterialScoreSharpW700Filled;
