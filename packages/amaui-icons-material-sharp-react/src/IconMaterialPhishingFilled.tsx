import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhishingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhishingFilled'

      short_name='Phishing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21q-2.5 0-4.25-1.75T5 15V9l5 5-1.4 1.425-1.6-1.6V15q0 1.65 1.175 2.825Q9.35 19 11 19q1.65 0 2.825-1.175Q15 16.65 15 15v-3.175q-.875-.325-1.438-1.087Q13 9.975 13 9t.562-1.738Q14.125 6.5 15 6.175V2h2v4.175q.875.325 1.438 1.087Q19 8.025 19 9t-.562 1.75q-.563.775-1.438 1.075V15q0 2.5-1.75 4.25T11 21Z"/>
    </Icon>
  );
});

IconMaterialPhishingFilled.displayName = 'AmauiIconMaterialPhishingFilled';

export default IconMaterialPhishingFilled;
