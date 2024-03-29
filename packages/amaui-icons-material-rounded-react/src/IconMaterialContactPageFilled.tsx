import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageFilled'

      short_name='ContactPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm-4 4h8v-.575q0-.6-.325-1.1-.325-.5-.9-.75-.65-.275-1.337-.425Q12.75 15 12 15t-1.438.15q-.687.15-1.337.425-.575.25-.9.75-.325.5-.325 1.1Zm10 4H6q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialContactPageFilled.displayName = 'AmauiIconMaterialContactPageFilled';

export default IconMaterialContactPageFilled;
