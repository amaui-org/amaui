import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcessChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartFilled'

      short_name='ProcessChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.4 18q-.375-.2-.513-.587-.137-.388.063-.763l5.1-10.2q.2-.375.588-.512Q8.025 5.8 8.4 6t.513.587q.137.388-.063.763l-5.1 10.2q-.2.375-.587.512Q2.775 18.2 2.4 18ZM9 18q-.375-.2-.512-.587-.138-.388.062-.763l5.1-10.2q.2-.375.588-.512Q14.625 5.8 15 6t.512.587q.138.388-.062.763l-5.1 10.2q-.2.375-.588.512Q9.375 18.2 9 18Zm6.6 0q-.375-.2-.512-.587-.138-.388.062-.763l5.1-10.2q.2-.375.588-.512.387-.138.762.062t.513.587q.137.388-.063.763l-5.1 10.2q-.2.375-.587.512-.388.138-.763-.062Z"/>
    </Icon>
  );
});

IconMaterialProcessChartFilled.displayName = 'AmauiIconMaterialProcessChartFilled';

export default IconMaterialProcessChartFilled;
