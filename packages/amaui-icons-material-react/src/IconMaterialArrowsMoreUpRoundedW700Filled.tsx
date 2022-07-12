import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpRoundedW700Filled'
      short_name='ArrowsMoreUp'

      {...props}
    >
      <path d="M18.05 14.525q-.65 0-1.112-.463-.463-.462-.463-1.112V5.525H9.05q-.65 0-1.112-.463-.463-.462-.463-1.112 0-.65.463-1.113.462-.462 1.112-.462h9q.65 0 1.113.462.462.463.462 1.113v9q0 .65-.462 1.112-.463.463-1.113.463Zm-5.15 5.15q-.65 0-1.112-.463-.463-.462-.463-1.112v-7.425H3.9q-.65 0-1.112-.463-.463-.462-.463-1.112 0-.65.463-1.113.462-.462 1.112-.462h9q.65 0 1.113.462.462.463.462 1.113v9q0 .65-.462 1.112-.463.463-1.113.463Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreUpRoundedW700Filled;
