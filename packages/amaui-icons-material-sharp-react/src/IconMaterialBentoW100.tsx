import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBentoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoW100'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 17.85V6.15h17.7v11.7Zm9.95-6.2h7.05v-4.8H13.1Zm-9.25 5.5h8.55V6.85H3.85ZM8 12.9q-.375 0-.637-.263Q7.1 12.375 7.1 12t.263-.637Q7.625 11.1 8 11.1t.637.263q.263.262.263.637t-.263.637Q8.375 12.9 8 12.9Zm5.1 4.25h7.05v-4.8H13.1Z"/>
    </Icon>
  );
});

IconMaterialBentoW100.displayName = 'AmauiIconMaterialBentoW100';

export default IconMaterialBentoW100;
