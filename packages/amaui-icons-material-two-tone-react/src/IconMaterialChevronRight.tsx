import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRight'

      short_name='ChevronRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
    </Icon>
  );
});

IconMaterialChevronRight.displayName = 'AmauiIconMaterialChevronRight';

export default IconMaterialChevronRight;
