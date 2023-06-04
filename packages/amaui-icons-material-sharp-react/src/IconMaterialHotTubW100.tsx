import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotTubW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotTubW100'

      short_name='HotTub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 9.3q-.525 0-.887-.362-.363-.363-.363-.888t.363-.888Q6.475 6.8 7 6.8t.888.362q.362.363.362.888t-.362.888Q7.525 9.3 7 9.3ZM3.35 20.7v-7.4H6.1v-1.85q0-.475.338-.813.337-.337.812-.337.3 0 .575.125.275.125.475.325l1.3 1.45q.225.275.55.55.325.275.75.55h9.75v7.4Zm15.3-10.4.05-.55q.05-.6-.2-1.15-.25-.55-.75-1.05-.575-.6-.9-1.275-.325-.675-.25-1.425l.05-.55h.7l-.05.6q-.05.575.175 1.112.225.538.725.988.6.6.938 1.3.337.7.262 1.45l-.05.55Zm-4 0 .05-.55q.05-.6-.2-1.15-.25-.55-.75-1.05-.575-.6-.9-1.275-.325-.675-.25-1.425l.05-.55h.7l-.05.6q-.05.575.175 1.087Q13.7 6.5 14.2 7q.6.6.925 1.312.325.713.275 1.438l-.05.55Zm1.5 9.7h3.1v-6h-3.1Zm-3.8 0h3.1v-6h-3.1Zm-3.8 0h3.1v-6h-3.1Zm-3.8 0h3.1v-6h-3.1Z"/>
    </Icon>
  );
});

IconMaterialHotTubW100.displayName = 'AmauiIconMaterialHotTubW100';

export default IconMaterialHotTubW100;
