import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmoticonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmoticonW100Filled'

      short_name='Emoticon'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M286 750q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10Zm0-280q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10Zm140 120v-28h108v28H426Zm221 199-22-16q26-44 40-93.5T679 576q0-66-20.5-124.5T601 344l21-18q40 53 62.5 116.5T707 576q0 60-16 113t-44 100Z"/>
    </Icon>
  );
});

IconMaterialEmoticonW100Filled.displayName = 'AmauiIconMaterialEmoticonW100Filled';

export default IconMaterialEmoticonW100Filled;
