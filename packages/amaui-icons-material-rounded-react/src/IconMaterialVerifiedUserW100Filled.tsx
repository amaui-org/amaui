import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerifiedUserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserW100Filled'

      short_name='VerifiedUser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 13.65-1.9-1.9q-.125-.125-.25-.125t-.25.125q-.125.125-.112.262.012.138.112.238l1.875 1.875q.225.225.525.225.3 0 .525-.225l3.975-3.975q.125-.125.125-.25t-.125-.25q-.125-.125-.262-.113-.138.013-.238.113ZM12 20.575h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserW100Filled.displayName = 'AmauiIconMaterialVerifiedUserW100Filled';

export default IconMaterialVerifiedUserW100Filled;
