import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyTipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipW100'

      short_name='PrivacyTip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.15 0 .25-.1t.1-.25V10.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.85q0 .15.1.25t.25.1Zm0-7q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363Q12.225 8 12 8q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 11.575h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Zm0-.675q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.925q0-.25-.137-.45-.138-.2-.388-.3l-5.2-1.925Q12.15 4.2 12 4.2q-.15 0-.275.05l-5.2 1.925q-.25.1-.387.3-.138.2-.138.45V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.85Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipW100.displayName = 'AmauiIconMaterialPrivacyTipW100';

export default IconMaterialPrivacyTipW100;
