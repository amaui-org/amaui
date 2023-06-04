import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyW100Filled'

      short_name='Policy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 6.525q-.2 0-.362-.038-.163-.037-.288-.087-2.625-1.075-4.337-3.6Q5.3 14.275 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 1.35-.375 2.763-.375 1.412-1.175 2.687L14.2 13.6q.225-.35.362-.763.138-.412.138-.837 0-1.125-.787-1.913Q13.125 9.3 12 9.3t-1.912.787Q9.3 10.875 9.3 12t.788 1.912q.787.788 1.912.788.475 0 .913-.15.437-.15.787-.45l3.05 3.05q-.8 1.125-1.925 1.975-1.125.85-2.175 1.275-.125.05-.287.087-.163.038-.363.038Z"/>
    </Icon>
  );
});

IconMaterialPolicyW100Filled.displayName = 'AmauiIconMaterialPolicyW100Filled';

export default IconMaterialPolicyW100Filled;
