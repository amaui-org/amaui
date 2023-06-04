import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreDouble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDouble'

      short_name='UnfoldMoreDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 23.975 7.45 19.4l1.4-1.4 3.175 3.15 3.175-3.175 1.4 1.425Zm0-5L7.45 14.4l1.4-1.4 3.175 3.15 3.175-3.175 1.4 1.425ZM8.85 11 7.425 9.575l4.6-4.6 4.575 4.6L15.175 11l-3.15-3.175Zm0-5L7.425 4.575l4.6-4.6 4.575 4.6L15.175 6l-3.15-3.175Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreDouble.displayName = 'AmauiIconMaterialUnfoldMoreDouble';

export default IconMaterialUnfoldMoreDouble;
