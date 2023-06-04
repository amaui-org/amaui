import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsOutward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsOutward'

      short_name='ArrowsOutward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 776 80 576l200-200 57 56-104 104h207v80H233l103 104-56 56Zm400 0-56-57 103-103H520v-80l208-1-104-103 56-56 200 200-200 200Z"/>
    </Icon>
  );
});

IconMaterialArrowsOutward.displayName = 'AmauiIconMaterialArrowsOutward';

export default IconMaterialArrowsOutward;
