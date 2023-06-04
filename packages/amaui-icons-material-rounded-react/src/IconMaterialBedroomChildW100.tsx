import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomChildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildW100'

      short_name='BedroomChild'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 14.7h9v1.15q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V12.8q0-.65-.425-1.075-.425-.425-1.075-.425v-1.2q0-.65-.425-1.075Q14.85 8.6 14.2 8.6H9.8q-.65 0-1.075.425Q8.3 9.45 8.3 10.1v1.2q-.65 0-1.075.425Q6.8 12.15 6.8 12.8v3.05q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25ZM9 11.3v-1.2q0-.35.225-.575Q9.45 9.3 9.8 9.3h4.4q.35 0 .575.225.225.225.225.575v1.2ZM7.5 14v-1.2q0-.35.225-.575Q7.95 12 8.3 12h7.4q.35 0 .575.225.225.225.225.575V14Zm-2.7 6.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.35 0 .575-.225Q20 19.55 20 19.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8v14.4q0 .35.225.575Q4.45 20 4.8 20ZM4 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomChildW100.displayName = 'AmauiIconMaterialBedroomChildW100';

export default IconMaterialBedroomChildW100;
