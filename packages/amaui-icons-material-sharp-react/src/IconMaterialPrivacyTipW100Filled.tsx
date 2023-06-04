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
      <path d="M11.65 16h.7v-5.55h-.7ZM12 9q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363Q12.225 8 12 8q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 11.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipW100Filled.displayName = 'AmauiIconMaterialPrivacyTipW100Filled';

export default IconMaterialPrivacyTipW100Filled;
