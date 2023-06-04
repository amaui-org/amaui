import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMmsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsW100'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 13.1h6.7q.275 0 .375-.225.1-.225-.05-.425L14 10.1q-.125-.15-.312-.15-.188 0-.313.15L11.2 12.8l-1.275-1.475q-.125-.15-.312-.137-.188.012-.313.162l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Zm.7.1L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/>
    </Icon>
  );
});

IconMaterialMmsW100.displayName = 'AmauiIconMaterialMmsW100';

export default IconMaterialMmsW100;
