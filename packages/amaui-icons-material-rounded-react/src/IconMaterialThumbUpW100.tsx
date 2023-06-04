import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpW100'

      short_name='ThumbUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.55 19.7V9.3l5.525-5.475q.175-.175.375-.225.2-.05.375.05t.25.3q.075.2.025.425l-1 4.925h7.1q.575 0 1.038.462.462.463.462 1.038v1q0 .125-.025.275-.025.15-.075.275l-2.65 6.3q-.2.45-.675.75-.475.3-.975.3Zm.7-10.1V19h9.05q.275 0 .563-.15.287-.15.437-.5L21 12v-1.2q0-.35-.225-.575Q20.55 10 20.2 10h-7.95l1.1-5.45ZM4.8 19.7q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2v-7.4q0-.625.437-1.063Q4.175 9.3 4.8 9.3h2.75v.7H4.8q-.35 0-.575.225Q4 10.45 4 10.8v7.4q0 .35.225.575Q4.45 19 4.8 19h2.75v.7Zm3.45-.7V9.6 19Z"/>
    </Icon>
  );
});

IconMaterialThumbUpW100.displayName = 'AmauiIconMaterialThumbUpW100';

export default IconMaterialThumbUpW100;
