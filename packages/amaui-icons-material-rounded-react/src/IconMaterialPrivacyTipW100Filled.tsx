import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyTipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipW100Filled'

      short_name='PrivacyTip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.15 0 .25-.1t.1-.25V10.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.85q0 .15.1.25t.25.1Zm0-7q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363Q12.225 8 12 8q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 11.575h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipW100Filled.displayName = 'AmauiIconMaterialPrivacyTipW100Filled';

export default IconMaterialPrivacyTipW100Filled;
