import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownRoundedW700'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M5.9 21.675q-.65 0-1.113-.463-.462-.462-.462-1.112v-9q0-.65.462-1.113.463-.462 1.113-.462.65 0 1.113.462.462.463.462 1.113v7.425H14.9q.65 0 1.113.462.462.463.462 1.113 0 .65-.462 1.112-.463.463-1.113.463Zm5.15-5.15q-.65 0-1.112-.463-.463-.462-.463-1.112v-9q0-.65.463-1.112.462-.463 1.112-.463.65 0 1.113.463.462.462.462 1.112v7.425h7.425q.65 0 1.113.462.462.463.462 1.113 0 .65-.462 1.112-.463.463-1.113.463Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreDownRoundedW700;
