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
      <path d="M11 21q-2.5 0-4.25-1.75T5 15v-4.8q0-.35.3-.475t.55.125L9.3 13.3q.275.275.275.687 0 .413-.275.713-.3.3-.712.3-.413 0-.713-.3L7 13.825V15q0 1.65 1.175 2.825Q9.35 19 11 19q1.65 0 2.825-1.175Q15 16.65 15 15v-3.175q-.875-.325-1.438-1.087Q13 9.975 13 9t.562-1.738Q14.125 6.5 15 6.175V3q0-.425.288-.713Q15.575 2 16 2t.712.287Q17 2.575 17 3v3.175q.875.325 1.438 1.087Q19 8.025 19 9t-.562 1.75q-.563.775-1.438 1.075V15q0 2.5-1.75 4.25T11 21Z"/>
    </Icon>
  );
});

IconMaterialPhishingFilled.displayName = 'AmauiIconMaterialPhishingFilled';

export default IconMaterialPhishingFilled;
