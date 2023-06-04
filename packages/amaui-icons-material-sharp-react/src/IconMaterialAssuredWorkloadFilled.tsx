import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssuredWorkloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadFilled'

      short_name='AssuredWorkload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17v-7h2v7Zm6 0v-7h2v7ZM2 8V6l10-5 10 5v2Zm0 13v-2h12.05q.05.525.125 1.012.075.488.225.988Zm15-7.75V10h2v2.25ZM20 24q-1.725-.425-2.862-1.988Q16 20.45 16 18.55V16l4-2 4 2v2.55q0 1.9-1.137 3.462Q21.725 23.575 20 24Zm-.725-3 3.475-3.45-1.05-1.05-2.425 2.375-.975-.975-1.05 1.075Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadFilled.displayName = 'AmauiIconMaterialAssuredWorkloadFilled';

export default IconMaterialAssuredWorkloadFilled;
