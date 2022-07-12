import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownTwoTone'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M5.9 21.6q-.6 0-1.05-.45-.45-.45-.45-1.05v-9q0-.625.45-1.075.45-.45 1.05-.45.625 0 1.075.45.45.45.45 1.075v7.475H14.9q.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45Zm5.15-5.15q-.6 0-1.05-.45-.45-.45-.45-1.05v-9q0-.625.45-1.075.45-.45 1.05-.45.625 0 1.075.45.45.45.45 1.075v7.475h7.475q.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreDownTwoTone;
