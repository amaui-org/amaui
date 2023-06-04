import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairFilled'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2H1v-9h4v5h14v-5h4v9h-3v2h-2v-2H6v2Zm3-8V8H4V3h16v5h-3v5Z"/>
    </Icon>
  );
});

IconMaterialChairFilled.displayName = 'AmauiIconMaterialChairFilled';

export default IconMaterialChairFilled;
