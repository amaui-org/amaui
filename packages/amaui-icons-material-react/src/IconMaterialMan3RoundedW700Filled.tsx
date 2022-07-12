import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3RoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3RoundedW700Filled'
      short_name='Man3'

      {...props}
    >
      <path d="M10.8 22.525q-.65 0-1.112-.463-.463-.462-.463-1.112v-5.325H8.8q-.65 0-1.112-.463-.463-.462-.463-1.112V10.2q0-1.3.925-2.225t2.225-.925h3.25q1.3 0 2.225.925t.925 2.225v3.85q0 .65-.463 1.112-.462.463-1.112.463h-.425v5.325q0 .65-.463 1.112-.462.463-1.112.463Zm.65-16.775L9.925 4.225Q9.7 4 9.7 3.675q0-.325.225-.55L11.45 1.6q.225-.225.55-.225.325 0 .55.225l1.525 1.525q.225.225.225.55 0 .325-.225.55L12.55 5.75q-.225.225-.55.225-.325 0-.55-.225Z"/>
    </Icon>
  )
});

export default IconMaterialMan3RoundedW700Filled;
