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
      <path d="M4.65 17.85q-.65 0-1.075-.425Q3.15 17 3.15 16.35v-8.7q0-.65.425-1.075Q4 6.15 4.65 6.15h14.7q.65 0 1.075.425.425.425.425 1.075v8.7q0 .65-.425 1.075-.425.425-1.075.425Zm8.45-6.2h7.05v-4q0-.3-.25-.55-.25-.25-.55-.25H13.1Zm-8.45 5.5h7.75V6.85H4.65q-.3 0-.55.25-.25.25-.25.55v8.7q0 .3.25.55.25.25.55.25ZM8 12.9q-.375 0-.637-.263Q7.1 12.375 7.1 12t.263-.637Q7.625 11.1 8 11.1t.637.263q.263.262.263.637t-.263.637Q8.375 12.9 8 12.9Zm5.1 4.25h6.25q.3 0 .55-.25.25-.25.25-.55v-4H13.1Z"/>
    </Icon>
  );
});

IconMaterialBentoW100.displayName = 'AmauiIconMaterialBentoW100';

export default IconMaterialBentoW100;
