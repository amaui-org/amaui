import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingTwoTone'
      short_name='Moving'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19.71,9.71L22,12V6h-6l2.29,2.29l-4.17,4.17c-0.39,0.39-1.02,0.39-1.41,0l-1.17-1.17c-1.17-1.17-3.07-1.17-4.24,0L2,16.59 L3.41,18l5.29-5.29c0.39-0.39,1.02-0.39,1.41,0l1.17,1.17c1.17,1.17,3.07,1.17,4.24,0L19.71,9.71z"/>
    </Icon>
  );
});

IconMaterialMovingTwoTone.displayName = 'AmauiIconMaterialMovingTwoTone';

export default IconMaterialMovingTwoTone;
