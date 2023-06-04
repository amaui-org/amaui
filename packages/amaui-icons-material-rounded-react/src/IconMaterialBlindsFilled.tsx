import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlindsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsFilled'

      short_name='Blinds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-2h2V4h16v14h2v2Zm4-2h12v-7h-5v2.275q.45.275.725.725.275.45.275 1 0 .825-.587 1.413Q12.825 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15q0-.55.275-1 .275-.45.725-.725V11H6Z"/>
    </Icon>
  );
});

IconMaterialBlindsFilled.displayName = 'AmauiIconMaterialBlindsFilled';

export default IconMaterialBlindsFilled;
