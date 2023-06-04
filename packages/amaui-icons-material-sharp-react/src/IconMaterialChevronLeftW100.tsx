import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftW100'

      short_name='ChevronLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 17.1 8.9 12 14 6.9l.5.5L9.9 12l4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftW100.displayName = 'AmauiIconMaterialChevronLeftW100';

export default IconMaterialChevronLeftW100;
