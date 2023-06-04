import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChurchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchW100'

      short_name='Church'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 21.35V14.3l4-1.775V9.2l5-2.525V4.15h-2v-.7h2v-2h.7v2h2v.7h-2v2.525l5 2.525v3.325l4 1.775v7.05h-7.7v-5.1h-3.3v5.1Zm.7-.7h6.3v-5.1h4.7v5.1h6.3v-5.875l-4-1.8V9.65L12 7.275 7.35 9.65v3.325l-4 1.8ZM12 13q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm0 .95Z"/>
    </Icon>
  );
});

IconMaterialChurchW100.displayName = 'AmauiIconMaterialChurchW100';

export default IconMaterialChurchW100;
